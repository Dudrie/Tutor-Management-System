import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { withSnackbar, WithSnackbarProps } from 'notistack';
import React, { useEffect, useState } from 'react';
import UserForm, { UserFormSubmitCallback } from '../../components/forms/UserForm';
import LoadingSpinner from '../../components/LoadingSpinner';
import TableWithForm from '../../components/TableWithForm';
import { useDialog } from '../../hooks/DialogService';
import { useAxios } from '../../hooks/FetchingService';
import { CreateUserDTO, EditUserDTO } from '../../typings/RequestDTOs';
import { Role, Tutorial } from '../../typings/ServerResponses';
import { UserWithFetchedTutorials } from '../../typings/types';
import UserTableRow from './components/UserTableRow';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    dialogDeleteButton: {
      color: theme.palette.error.main,
    },
  })
);

const availableRoles = [Role.ADMIN, Role.CORRECTOR, Role.TUTOR, Role.EMPLOYEE];

function UserManagement({ enqueueSnackbar }: WithSnackbarProps): JSX.Element {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<UserWithFetchedTutorials[]>([]);
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const {
    getUsersAndFetchTutorials,
    createUserAndFetchTutorials,
    editUserAndFetchTutorials: editUserRequest,
    deleteUser: deleteUserRequest,
    getAllTutorials,
    setTemporaryPassword,
  } = useAxios();
  const dialog = useDialog();

  useEffect(() => {
    setIsLoading(true);

    Promise.all([
      getUsersAndFetchTutorials().catch(() => {
        enqueueSnackbar('Nutzer konnten nicht abgerufen werden.', { variant: 'error' });
      }),
      getAllTutorials().catch(() => {
        enqueueSnackbar('Tutorien konnten nicht abgerufen werden.', { variant: 'error' });
      }),
    ]).then(([userResponse, tutorialResponse]) => {
      if (userResponse) {
        setUsers(userResponse);
      }

      if (tutorialResponse) {
        setTutorials(tutorialResponse);
      }

      setIsLoading(false);
    });
  }, [enqueueSnackbar, getUsersAndFetchTutorials, getAllTutorials]);

  const handleCreateUser: UserFormSubmitCallback = async (
    { firstname, lastname, tutorials, roles, username, password },
    { resetForm, setSubmitting }
  ) => {
    const userToCreate: CreateUserDTO = {
      firstname,
      lastname,
      roles,
      tutorials,
      username,
      password,
    };

    try {
      const response = await createUserAndFetchTutorials(userToCreate);

      setUsers([...users, response]);
      enqueueSnackbar(`Nutzer wurde erfolgreich angelegt.`, { variant: 'success' });
      resetForm();
    } catch (reason) {
      enqueueSnackbar(`Nutzer konnte nicht gespeichert werden.`, { variant: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  const editUser: (user: UserWithFetchedTutorials) => UserFormSubmitCallback = user => async (
    { firstname, lastname, roles, tutorials, password },
    { setSubmitting }
  ) => {
    const userInformation: EditUserDTO = {
      firstname,
      lastname,
      roles,
      tutorials,
    };

    try {
      const updatedUser = await editUserRequest(user.id, userInformation);
      setUsers(
        users.map(u => {
          if (u.id !== updatedUser.id) {
            return u;
          }

          return updatedUser;
        })
      );

      if (!!password) {
        await setTemporaryPassword(user.id, { password });
      }

      enqueueSnackbar(`Nutzer wurde erfolgreich gespeichert.`, { variant: 'success' });
      dialog.hide();
    } catch (e) {
      setSubmitting(false);
      enqueueSnackbar(`Nutzer konnte nicht gespeichert werden.`, { variant: 'error' });
    }
  };

  function deleteUser(user: UserWithFetchedTutorials) {
    deleteUserRequest(user.id)
      .then(() => {
        setUsers(users.filter(u => u.id !== user.id));
      })
      .finally(() => dialog.hide());
  }

  function handleDeleteUser(user: UserWithFetchedTutorials) {
    const nameOfUser = `${user.firstname} ${user.lastname}`;
    dialog.show({
      title: 'Nutzer löschen',
      content: `Soll der Nutzer "${nameOfUser}" wirklich gelöscht werden? Diese Aktion kann nicht rückgängig gemacht werden.`,
      actions: [
        {
          label: 'Nicht löschen',
          onClick: () => dialog.hide(),
        },
        {
          label: 'Löschen',
          onClick: () => deleteUser(user),
          buttonProps: {
            className: classes.dialogDeleteButton,
          },
        },
      ],
    });
  }

  function handleEditUser(user: UserWithFetchedTutorials) {
    dialog.show({
      title: 'Nutzer bearbeiten',
      content: (
        <UserForm
          user={user}
          availableRoles={availableRoles}
          tutorials={tutorials}
          onSubmit={editUser(user)}
          onCancelClicked={() => dialog.hide()}
        />
      ),
    });
  }

  return (
    <div className={classes.root}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <TableWithForm
          title='Neuen Nutzer erstellen'
          placeholder='Keine Nutzer vorhanden.'
          form={
            <UserForm
              availableRoles={availableRoles}
              tutorials={tutorials}
              onSubmit={handleCreateUser}
            />
          }
          items={users}
          createRowFromItem={user => (
            <UserTableRow
              user={user}
              onEditUserClicked={handleEditUser}
              onDeleteUserClicked={handleDeleteUser}
            />
          )}
        />
      )}
    </div>
  );
}

export default withSnackbar(UserManagement);
