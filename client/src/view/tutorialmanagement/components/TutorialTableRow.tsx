import { Button, Chip, TableCell } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { format } from 'date-fns';
import React from 'react';
import ListItemMenu from '../../../components/ListItemMenu';
import PaperTableRow, { PaperTableRowProps } from '../../../components/PaperTableRow';
import { TutorialWithFetchedCorrectors } from '../../../typings/types';
import { renderLink } from '../../../components/drawer/components/renderLink';
import { RoutingPath } from '../../../util/RoutingPath';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tutorChip: {
      margin: theme.spacing(0.5),
    },
    wrappingCell: {
      // whiteSpace: 'pre-line',
    },
    substituteButton: {
      marginRight: theme.spacing(1),
    },
  })
);

interface Substitute {
  date: Date;
  name: string;
}

interface Props extends PaperTableRowProps {
  tutorial: TutorialWithFetchedCorrectors;
  onEditTutorialClicked: (tutorial: TutorialWithFetchedCorrectors) => void;
  onDeleteTutorialClicked: (tutorial: TutorialWithFetchedCorrectors) => void;
  substitutes: Substitute[];
}

function TutorialTableRow({
  tutorial,
  substitutes,
  onEditTutorialClicked,
  onDeleteTutorialClicked,
  ...rest
}: Props): JSX.Element {
  const classes = useStyles();

  return (
    <PaperTableRow
      label={`Tutorium #${tutorial.slot}`}
      buttonCellContent={
        <>
          <Button
            variant='outlined'
            className={classes.substituteButton}
            component={renderLink(
              RoutingPath.MANAGE_TUTORIALS_SUBSTITUTES.replace(':tutorialid', tutorial.id)
            )}
          >
            Vertretungen
          </Button>

          <ListItemMenu
            onEditClicked={() => onEditTutorialClicked(tutorial)}
            onDeleteClicked={() => onDeleteTutorialClicked(tutorial)}
          />
        </>
      }
      {...rest}
    >
      <TableCell className={classes.wrappingCell}>
        {tutorial.tutor && (
          <Chip
            key={tutorial.id}
            label={`Tutor: ${tutorial.tutor.lastname}, ${tutorial.tutor.firstname}`}
            className={classes.tutorChip}
            color='primary'
          />
        )}
        {substitutes.length > 0 && (
          <div>
            {substitutes.map(sub => (
              <Chip
                key={sub.date.toISOString()}
                label={`Vertr. ${format(sub.date, 'dd.MM.yy')}: ${sub.name}`}
                className={classes.tutorChip}
              />
            ))}
          </div>
        )}
      </TableCell>
    </PaperTableRow>
  );
}

export default TutorialTableRow;
