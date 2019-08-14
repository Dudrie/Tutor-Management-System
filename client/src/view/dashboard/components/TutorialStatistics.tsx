import { createStyles, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { TutorialSummaryInfo } from '../Dashboard';
import ScheinCriteriaStatsCard from './ScheinCrtieriaStatsCard';
import ScheinPassedStatsCard from './ScheinPassedStatsCard';
import TutorialStatsCard from './TutorialStatsCard';

interface TutorialStatisticsProps {
  value: TutorialSummaryInfo;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tutorialHeading: {
      padding: theme.spacing(1.5),
      margin: theme.spacing(1, 0),
    },
    cardsContainer: {
      display: 'grid',
      // padding: theme.spacing(1),
      margin: theme.spacing(1),
      gridTemplateColumns: 'repeat(3, 1fr)',
      width: 'inherit',
    },
  })
);

function TutorialStatistics({ value }: TutorialStatisticsProps): JSX.Element {
  const classes = useStyles();
  const activeCriteria: string[] = [];

  Object.values(value.studentInfos).forEach(summary => {
    Object.values(summary.scheinCriteriaSummary).forEach(status => {
      if (!activeCriteria.includes(status.id)) {
        activeCriteria.push(status.id);
      }
    });
  });

  return (
    <>
      <Paper className={classes.tutorialHeading}>
        <Typography variant='h5'>{'Tutorial #' + value.tutorial.slot}</Typography>
      </Paper>
      <div className={classes.cardsContainer}>
        <TutorialStatsCard value={value} />
        {activeCriteria.length > 0 ? (
          <>
            <ScheinPassedStatsCard value={value} />
            <ScheinCriteriaStatsCard value={value} criteriaIds={activeCriteria} />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
export default TutorialStatistics;
