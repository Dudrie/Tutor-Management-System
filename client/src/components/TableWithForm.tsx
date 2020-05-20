import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import OpenableFormWithFab, { EditorOpenState } from './OpenableFormWithFab';
import TableWithPadding, { TableWithPaddingProps } from './TableWithPadding';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topBar: {
      display: 'flex',
      width: '100%',
      marginTop: theme.spacing(1),
      justifyContent: 'flex-end',
      marginBottom: theme.spacing(2),
    },
    tableWithoutBorders: {
      '& td': {
        borderBottom: 'none',
      },
    },
    spacingRow: {
      height: theme.spacing(1.5),
    },
    placeholder: {
      marginTop: 64,
      textAlign: 'center',
    },
  })
);

interface Props<T> extends TableWithPaddingProps<T> {
  title: string;
  form: React.ReactNode;
  topBarContent?: React.ReactNode;
}

function TableWithForm<T>({ title, form, topBarContent, ...other }: Props<T>): JSX.Element {
  const classes = useStyles();
  const [{ isEditorOpen, isAnimating }, setEditorState] = useState<EditorOpenState>({
    isEditorOpen: false,
    isAnimating: false,
  });

  return (
    <>
      <div className={classes.topBar}>
        {topBarContent && !isEditorOpen && !isAnimating && topBarContent}

        <OpenableFormWithFab title={title} onOpenChange={(newState) => setEditorState(newState)}>
          {form}
        </OpenableFormWithFab>
      </div>

      <TableWithPadding {...other} />
    </>
  );
}

export default TableWithForm;
