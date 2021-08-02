import { EntityManager, MikroORM } from '@mikro-orm/core';
import { Module } from '@nestjs/common';
import { loadDatabaseModule } from '../../src/database/sql-database.module';
import { AttendanceCriteria } from '../../src/module/scheincriteria/container/criterias/AttendanceCriteria';
import { PresentationCriteria } from '../../src/module/scheincriteria/container/criterias/PresentationCriteria';
import { ScheinexamCriteria } from '../../src/module/scheincriteria/container/criterias/ScheinexamCriteria';
import { SheetIndividualCriteria } from '../../src/module/scheincriteria/container/criterias/SheetIndividualCriteria';
import { SheetTotalCriteria } from '../../src/module/scheincriteria/container/criterias/SheetTotalCriteria';
import { ShortTestCriteria } from '../../src/module/scheincriteria/container/criterias/ShortTestCriteria';
import { ScheincriteriaContainer } from '../../src/module/scheincriteria/container/scheincriteria.container';
import { ScheincriteriaConstructor } from '../../src/module/scheincriteria/scheincriteria.module';
import { StaticSettings } from '../../src/module/settings/settings.static';
import { ENTITY_LISTS, populateMockLists } from '../mocks/entities.mock';

@Module({
    imports: [loadDatabaseModule()],
})
export class TestDatabaseModule {
    constructor(private readonly orm: MikroORM) {
        this.initCriteriaContainer();
    }

    async init(): Promise<void> {
        const generator = this.orm.getSchemaGenerator();
        await generator.ensureDatabase();
        await generator.dropSchema();
        await generator.createSchema();

        await this.populateDatabase();
    }

    async reset(): Promise<void> {
        const dbName = StaticSettings.getService().getDatabaseConnectionInformation().dbName;
        const connection = this.orm.em.getConnection();
        const allTables = await connection.execute(`SHOW TABLES FROM \`${dbName}\``);
        const tableNames = allTables.map((row: Record<string, string>) => Object.values(row)[0]);

        for (const table of tableNames) {
            await connection.execute(`DELETE FROM ${table}`);
        }

        await this.populateDatabase();
    }

    private async populateDatabase() {
        const em = this.orm.em.fork();
        await this.generateMocks(em);

        for (const entities of ENTITY_LISTS) {
            em.persist(entities);
        }

        await em.flush();
    }

    private initCriteriaContainer() {
        const container = ScheincriteriaContainer.getContainer();
        const criterias: ScheincriteriaConstructor[] = [
            AttendanceCriteria,
            PresentationCriteria,
            SheetIndividualCriteria,
            SheetTotalCriteria,
            ScheinexamCriteria,
            ShortTestCriteria,
        ];

        criterias.forEach((criteria) => container.registerBluePrint(criteria));
    }

    private async generateMocks(em: EntityManager) {
        await populateMockLists(em);
    }
}
