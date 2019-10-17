import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { withSnackbar, WithSnackbarProps } from 'notistack';
import React, { useEffect, useState } from 'react';
import { MailingStatus } from 'shared/dist/model/Mail';
import { Role } from 'shared/dist/model/Role';
import { Tutorial } from 'shared/dist/model/Tutorial';
import { CreateUserDTO, UserDTO } from 'shared/dist/model/User';
import SubmitButton from '../../components/forms/components/SubmitButton';
import UserForm, { UserFormSubmitCallback, UserFormState } from '../../components/forms/UserForm';
import LoadingSpinner from '../../components/LoadingSpinner';
import SnackbarWithList from '../../components/SnackbarWithList';
import TableWithForm from '../../components/TableWithForm';
import { useDialog } from '../../hooks/DialogService';
import { useAxios } from '../../hooks/FetchingService';
import { UserWithFetchedTutorials } from '../../typings/types';
import { getNameOfEntity, saveBlob } from '../../util/helperFunctions';
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

class UsernameAlreadyTakenError {
  constructor(readonly message: string) {}
}

const availableRoles = [Role.ADMIN, Role.CORRECTOR, Role.TUTOR, Role.EMPLOYEE];

/**
 * Converts the given form state to an UserDTO.
 *
 * __Important__: The `otherUsers` array must only contain __other__ users not the one which for example gets edited. This is because the function also checks if the username is already taken by one of the users in `otherUsers` and if it is an `UsernameAlreadyTakenError` is thrown.
 *
 * @param formState State of the UserForm to convert.
 * @param otherUsers Other users to compare usernames with.
 *
 * @throws `UsernameAlreadyTakenError` If the username is already taken by an other user this error gets thrown.
 */
function convertFormStateToUserDTO(
  { firstname, lastname, tutorials, tutorialsToCorrect, roles, username, email }: UserFormState,
  otherUsers: UserWithFetchedTutorials[]
): UserDTO {
  for (const user of otherUsers) {
    if (user.username.toLowerCase().localeCompare(username.toLowerCase()) === 0) {
      throw new UsernameAlreadyTakenError(`Username ${username} already taken.`);
    }
  }

  return {
    firstname,
    lastname,
    username,
    email,
    roles,
    tutorials,
    tutorialsToCorrect,
  };
}

function UserManagement({ enqueueSnackbar, closeSnackbar }: WithSnackbarProps): JSX.Element {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [isSendingCredentials, setSendingCredentials] = useState(false);
  const [users, setUsers] = useState<UserWithFetchedTutorials[]>([]);
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const {
    getUsersAndFetchTutorials,
    createUserAndFetchTutorials,
    editUserAndFetchTutorials: editUserRequest,
    deleteUser: deleteUserRequest,
    getAllTutorials,
    setTemporaryPassword,
    sendCredentials: sendCredentialsRequest,
    sendCredentialsToSingleUser: sendCredentialsToSingleUserRequest,
    getCredentialsPDF,
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
    formState,
    { resetForm, setSubmitting, setFieldError }
  ) => {
    try {
      const userToCreate: CreateUserDTO = {
        ...convertFormStateToUserDTO(formState, users),
        password: formState.password,
      };

      const response = await createUserAndFetchTutorials(userToCreate);

      setUsers([...users, response]);
      enqueueSnackbar(`Nutzer wurde erfolgreich angelegt.`, { variant: 'success' });
      resetForm();
    } catch (reason) {
      if (reason instanceof UsernameAlreadyTakenError) {
        setFieldError('username', 'Nutzername bereits vergeben.');
      }

      enqueueSnackbar(`Nutzer konnte nicht gespeichert werden.`, { variant: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  const editUser: (user: UserWithFetchedTutorials) => UserFormSubmitCallback = user => async (
    formState,
    { setSubmitting, setFieldError }
  ) => {
    try {
      const { password } = formState;
      const userInformation: UserDTO = convertFormStateToUserDTO(
        formState,
        users.filter(u => u.id !== user.id)
      );

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
      if (e instanceof UsernameAlreadyTakenError) {
        setFieldError('username', 'Nutzername bereits vergeben.');
      }

      enqueueSnackbar(`Nutzer konnte nicht gespeichert werden.`, { variant: 'error' });
      setSubmitting(false);
    }
  };

  function deleteUser(user: UserWithFetchedTutorials) {
    deleteUserRequest(user.id)
      .then(() => {
        setUsers(users.filter(u => u.id !== user.id));
      })
      .finally(() => {
        dialog.hide();
        enqueueSnackbar(`Nutzer wurde erfolgreich gelöscht.`, { variant: 'success' });
      });
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
      DialogProps: {
        maxWidth: 'lg',
      },
    });
  }

  function handleSendCredentials() {
    dialog.show({
      title: 'Zugangsdaten verschicken',
      content:
        'Sollen die Zugangsdaten der Nutzer/innen an diese geschickt werden? Dies sendet jedem/r Nutzer/in eine E-Mail mit seinen/ihren Zugangsdaten.',
      actions: [
        {
          label: 'Abbrechen',
          onClick: () => dialog.hide(),
        },
        {
          label: 'Senden',
          onClick: () => {
            dialog.hide();
            sendCredentials();
          },
          buttonProps: {
            color: 'primary',
          },
        },
      ],
    });
  }

  async function sendCredentials() {
    setSendingCredentials(true);

    try {
      const { failedMailsInfo }: MailingStatus = await sendCredentialsRequest();

      if (failedMailsInfo.length === 0) {
        enqueueSnackbar('Zugangsdaten wurden erfolgreich verschickt.', { variant: 'success' });
      } else {
        const failedNames: string[] = failedMailsInfo.map(info => {
          const user = users.find(u => u.id === info.userId);

          return user ? getNameOfEntity(user) : 'NOT_FOUND';
        });

        enqueueSnackbar('', {
          persist: true,
          children: id => (
            <SnackbarWithList
              id={id}
              title={'Nicht zugestellte Zugangsdaten'}
              textBeforeList={
                'Die Zugangsdaten konnten nicht an folgende Nutzer/innen zugestellt werden:'
              }
              items={failedNames}
              isOpen
            />
          ),
        });
      }
    } catch {
      enqueueSnackbar('Zugangsdaten konnten nicht verschickt werden.', { variant: 'error' });
    }
    setSendingCredentials(false);
  }

  async function handlePrintCredentials() {
    setSendingCredentials(true);

    try {
      const blob = await getCredentialsPDF();

      saveBlob(blob, 'Zugangsdaten');
    } catch {
      enqueueSnackbar('Zugangsdaten PDF konnte nicht erzeugt werden.', { variant: 'error' });
    }

    setSendingCredentials(false);
  }

  async function sendCredentialsToSingleUser(user: UserWithFetchedTutorials) {
    const snackbarKey = enqueueSnackbar('Verschicke Zugangsdaten...', { variant: 'info' });

    try {
      const status: MailingStatus = await sendCredentialsToSingleUserRequest(user.id);

      closeSnackbar(snackbarKey || undefined);

      if (status.failedMailsInfo.length === 0) {
        enqueueSnackbar('Zugangsdaten erfolgreich verschickt.', { variant: 'success' });
      } else {
        enqueueSnackbar('Zugangsdaten verschicken fehlgeschlagen.', { variant: 'error' });
      }
    } catch {
      enqueueSnackbar('Zugangsdaten verschicken fehlgeschlagen.', { variant: 'error' });
    }
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
          topBarContent={
            <>
              <SubmitButton
                variant='outlined'
                isSubmitting={isSendingCredentials}
                onClick={handleSendCredentials}
              >
                Zugangsdaten verschicken
              </SubmitButton>

              <SubmitButton
                variant='outlined'
                isSubmitting={isSendingCredentials}
                onClick={handlePrintCredentials}
                style={{
                  marginLeft: 8,
                }}
              >
                Zugangsdaten ausdrucken
              </SubmitButton>
            </>
          }
          items={users}
          createRowFromItem={user => (
            <UserTableRow
              user={user}
              onEditUserClicked={handleEditUser}
              onDeleteUserClicked={handleDeleteUser}
              onSendCredentialsClicked={sendCredentialsToSingleUser}
            />
          )}
        />
      )}
    </div>
  );
}

export default withSnackbar(UserManagement);
