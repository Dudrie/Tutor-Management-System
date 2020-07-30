import { Box, Button, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useFormikContext } from 'formik';
import React, { useCallback } from 'react';
import FormikCheckbox from '../../../components/forms/components/FormikCheckbox';
import FormikDebugDisplay from '../../../components/forms/components/FormikDebugDisplay';
import FormikTextField from '../../../components/forms/components/FormikTextField';
import GridDivider from '../../../components/GridDivider';
import SubmitButton from '../../../components/loading/SubmitButton';
import { useDialog } from '../../../hooks/DialogService';
import { FormState } from '../SettingsPage.helpers';
import EMailSettings from './EMailSettings';

const useStyles = makeStyles((theme) =>
  createStyles({
    form: { display: 'flex', flexDirection: 'column' },
    unsavedChangesLabel: { marginLeft: theme.spacing(1) },
    input: { margin: theme.spacing(1, 0) },
  })
);

function SettingsPageForm(): JSX.Element {
  const classes = useStyles();
  const { showConfirmationDialog } = useDialog();
  const { handleSubmit, isSubmitting, dirty, isValid, resetForm } = useFormikContext<FormState>();

  const handleFormReset = useCallback(async () => {
    const result = await showConfirmationDialog({
      title: 'Einstellungen zurücksetzen?',
      content:
        'Sollen die Einstellungen wirklich zurückgesetzt werden? Dies kann nicht rückgängig gemacht werden!',
      acceptProps: { label: 'Zurücksetzen', deleteButton: true },
      cancelProps: { label: 'Abbrechen' },
    });

    if (result) {
      resetForm();
    }
  }, [showConfirmationDialog, resetForm]);

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Box display='flex' alignItems='center' marginBottom={3}>
        <SubmitButton
          variant='contained'
          color='primary'
          isSubmitting={isSubmitting}
          disabled={!dirty || !isValid}
        >
          Einstellungen speichern
        </SubmitButton>

        {dirty && (
          <Typography color='error' className={classes.unsavedChangesLabel}>
            Es gibt ungespeicherte Änderungen.
          </Typography>
        )}

        <Button
          onClick={handleFormReset}
          style={{ marginLeft: 'auto' }}
          variant='outlined'
          disabled={!dirty}
        >
          Formular zurücksetzen
        </Button>
      </Box>

      <Box
        flex={1}
        display='grid'
        gridTemplateColumns='fit-content(50%) 1fr'
        gridAutoRows='min-content'
        alignItems='baseline'
        gridColumnGap={24}
        gridRowGap={12}
        height='auto'
        maxHeight='100%'
        style={{ overflowY: 'auto' }}
      >
        <Typography style={{ fontSize: '1.1rem' }}>Standardteamgröße</Typography>
        <FormikTextField
          label='Standardteamgröße'
          name='defaultTeamSize'
          type='number'
          className={classes.input}
          required
        />

        <GridDivider />

        <Typography style={{ fontSize: '1.1rem' }}>Anwesenheiten</Typography>
        <FormikCheckbox
          label='Tutoren/innen dürfen Studierende entschuldigen'
          name='canTutorExcuseStudents'
        />

        <GridDivider />

        <Typography style={{ fontSize: '1.1rem' }}>E-Maileinstellungen</Typography>
        <EMailSettings />
      </Box>

      <FormikDebugDisplay showErrors />
    </form>
  );
}

export default SettingsPageForm;
