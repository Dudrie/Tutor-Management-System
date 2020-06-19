import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Paper,
  Step,
  StepLabel,
  Stepper,
  StepperProps,
} from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import SubmitButton from '../../loading/SubmitButton';
import { useStepper } from '../context/StepperContext';

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    buttonBox: {
      margin: theme.spacing(0, 2),
    },
    skipButton: {
      marginRight: theme.spacing(1),
    },
    stepper: {
      flex: 1,
      padding: theme.spacing(3, 1),
    },
  })
);

export interface StepperHeaderProps extends Omit<StepperProps, 'children' | 'activeStep'> {
  backButtonLabel: string;
  nextButtonLabel: string;
  nextButtonDoneLabel?: string;
}

function StepperHeader({
  backButtonLabel,
  nextButtonLabel,
  nextButtonDoneLabel,
  className,
  ...props
}: StepperHeaderProps) {
  const classes = useStyles();
  const {
    activeStep,
    nextStep,
    prevStep,
    isWaitingOnNextCallback,
    steps,
    isNextDisabled,
  } = useStepper();

  return (
    <Paper className={clsx(classes.paper)}>
      <Box className={classes.buttonBox}>
        <Button variant='outlined' onClick={prevStep} disabled={activeStep <= 0}>
          {backButtonLabel}
        </Button>
      </Box>

      <Stepper className={classes.stepper} {...props} activeStep={activeStep}>
        {steps.map((data, index) => {
          return (
            <Step key={data.label} completed={activeStep !== undefined && index < activeStep}>
              <StepLabel error={data.error}>{data.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <Box className={classes.buttonBox}>
        {steps[activeStep]?.skippable && (
          <Button variant='outlined' className={classes.skipButton} onClick={() => nextStep(true)}>
            Überspringen
          </Button>
        )}

        <SubmitButton
          isSubmitting={isWaitingOnNextCallback}
          variant='outlined'
          color='primary'
          onClick={() => nextStep()}
          disabled={isNextDisabled || activeStep === steps.length}
        >
          {!!nextButtonDoneLabel
            ? activeStep < steps.length - 1
              ? nextButtonLabel
              : nextButtonDoneLabel
            : nextButtonLabel}
        </SubmitButton>
      </Box>
    </Paper>
  );
}

export default StepperHeader;
