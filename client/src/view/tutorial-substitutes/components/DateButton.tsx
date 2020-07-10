import { Box, Button, ButtonProps, Typography } from '@material-ui/core';
import { createStyles, fade, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { DateTime } from 'luxon';
import { ChevronRight as RightArrowIcon } from 'mdi-material-ui';
import React from 'react';
import { NamedElement } from 'shared/model/Common';
import { getNameOfEntity } from 'shared/util/helpers';
import DateOrIntervalText from '../../../components/DateOrIntervalText';

const useStyles = makeStyles((theme) =>
  createStyles({
    dateButton: {
      marginTop: theme.spacing(1.5),
      '&:first-of-type': {
        marginTop: 0,
      },
    },
    dateButtonIcon: {
      marginLeft: 'auto',
    },
    changed: {
      color: theme.palette.orange.main,
      borderColor: fade(theme.palette.orange.main, 0.5),
    },
  })
);

interface Props extends ButtonProps {
  date: DateTime;
  isSelected: boolean;
  substitute?: NamedElement;
  isChanged?: boolean;
}

function DateButton({
  isSelected,
  substitute,
  date,
  isChanged,
  ...props
}: Props): JSX.Element | null {
  const classes = useStyles();

  return (
    <Button
      variant='outlined'
      color={isSelected ? 'primary' : 'default'}
      className={clsx(classes.dateButton, isChanged && classes.changed)}
      classes={{ endIcon: classes.dateButtonIcon }}
      endIcon={<RightArrowIcon />}
      {...props}
    >
      <Box display='flex' flexDirection='column' textAlign='left' style={{ textTransform: 'none' }}>
        <DateOrIntervalText date={date} />
        {
          <Typography variant='caption'>
            {!!substitute ? `Vertretung: ${getNameOfEntity(substitute)}` : 'Keine Vertretung'}
          </Typography>
        }
      </Box>
    </Button>
  );
}

export default DateButton;