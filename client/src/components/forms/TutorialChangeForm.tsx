import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Tutorial } from 'shared/model/Tutorial';
import * as Yup from 'yup';
import { FormikSubmitCallback } from '../../types';
import { getDisplayStringForTutorial } from '../../util/helperFunctions';
import FormikSelect from './components/FormikSelect';
import FormikBaseForm, { CommonlyUsedFormProps, FormikBaseFormProps } from './FormikBaseForm';
import { TutorialInEntity } from '../../../../server/src/shared/model/Common';

const useStyles = makeStyles(
  createStyles({
    tutorDropdown: {
      gridColumn: '1 / span 2',
    },
  })
);

export interface TutorialChangeFormState {
  tutorial: string;
}

const validationSchema = Yup.object().shape({
  tutorial: Yup.string().required('Benötigt'),
});

export type TutorialChangeFormSubmitCallback = FormikSubmitCallback<TutorialChangeFormState>;

interface Props extends Omit<FormikBaseFormProps<TutorialChangeFormState>, CommonlyUsedFormProps> {
  allTutorials: Tutorial[];
  tutorial: TutorialInEntity;
  onSubmit: TutorialChangeFormSubmitCallback;
  onCancel: () => void;
}

function TutorialChangeForm({
  tutorial,
  allTutorials,
  onSubmit,
  className,
  onCancel,
  ...other
}: Props): JSX.Element {
  const classes = useStyles();

  const initialFormValues: TutorialChangeFormState = {
    tutorial: tutorial.id,
  };

  return (
    <FormikBaseForm
      {...other}
      initialValues={initialFormValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      onCancelClicked={onCancel}
    >
      {() => (
        <FormikSelect
          name='tutorial'
          label='Tutorium'
          emptyPlaceholder='Keine Tutorien vorhanden.'
          items={allTutorials}
          itemToString={getDisplayStringForTutorial}
          itemToValue={t => t.id}
          fullWidth
          className={classes.tutorDropdown}
        />
      )}
    </FormikBaseForm>
  );
}

export default TutorialChangeForm;
