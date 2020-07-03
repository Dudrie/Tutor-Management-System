import { Box, Divider, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import CustomSelect, { OnChangeHandler } from '../../components/CustomSelect';
import Placeholder from '../../components/Placeholder';
import { useTutorialFromPath } from '../../hooks/useTutorialFromPath';
import { TUTORIAL_ROUTES } from '../../routes/Routes.tutorial';
import { getManageTutorialInternalsPath } from '../../routes/Routing.helpers';
import { RouteType, RoutingPath } from '../../routes/Routing.routes';
import Routes, { getRouteOfSubPath } from './components/Routes';

const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    dropdown: {
      flex: 1,
    },
  })
);

interface Props {
  routes: RouteType[];
}

function useInnerRouteMatch(routes: RouteType[], basePath: string) {
  const routeStrings = useMemo(
    () => routes.map((r) => getRouteOfSubPath({ basePath, subRoute: r.path })),
    [routes, basePath]
  );
  const match = useRouteMatch(routeStrings);
  return match;
}

function Content({ routes }: Props): JSX.Element {
  const classes = useStyles();

  const history = useHistory();
  const { tutorial, isLoading, error } = useTutorialFromPath();

  const [value, setValue] = useState('');
  const basePath = useMemo(() => getManageTutorialInternalsPath(':tutorialId'), []);
  const match = useInnerRouteMatch(routes, basePath);

  const items = useMemo(() => routes.filter((r) => r.isInDrawer), [routes]);

  useEffect(() => {
    if (!!match) {
      const [, subPath] = match.path.split(basePath);
      setValue(subPath);
    } else {
      setValue('');
    }
  }, [basePath, match]);

  const onPathSelect: OnChangeHandler = (e) => {
    if (typeof e.target.value !== 'string') {
      return;
    }

    if (!tutorial) {
      return;
    }

    const subRoute = e.target.value.replace(/\/:\w+\?$/, '');
    history.push({
      pathname: getRouteOfSubPath({ basePath, subRoute, tutorialId: tutorial.id }),
    });
  };

  return (
    <Box display='flex' flexDirection='column'>
      <Box marginBottom={2} display='flex' alignItems='center'>
        <BackButton to={RoutingPath.MANAGE_TUTORIALS} />

        <Typography className={classes.header} variant='h5'>
          {!!tutorial ? `Verwalte ${tutorial.toDisplayString()}` : 'Kein Tutorium.'}
        </Typography>

        <CustomSelect
          label='Bereich auswählen'
          disabled={!tutorial}
          items={items}
          value={value}
          itemToString={(item) => item.title}
          itemToValue={(item) => item.path}
          onChange={onPathSelect}
          className={classes.dropdown}
        />
      </Box>

      <Divider />

      <Box flex={1} marginTop={3}>
        <Placeholder
          placeholderText={error ?? 'Kein Tutorium gefunden.'}
          showPlaceholder={!!error || !tutorial}
          loading={isLoading}
        >
          <Routes routes={routes} basePath={basePath} />
        </Placeholder>
      </Box>
    </Box>
  );
}

function TutorialInternalsManagement(): JSX.Element {
  const routes = useMemo(() => [...TUTORIAL_ROUTES], []);

  return <Content routes={routes} />;
}

export default TutorialInternalsManagement;