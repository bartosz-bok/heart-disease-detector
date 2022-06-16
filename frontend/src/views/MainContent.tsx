import { FC } from 'react';
import { Container, createStyles, Paper } from '@mantine/core';
import { NAV_BAR_HEIGHT } from '../constants/styling';
import { Questionnaire } from '../components/Questionnaire';

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.colorScheme === 'dark' ? undefined : theme.other.backgroundColor1,
    height: `calc(100vh - ${NAV_BAR_HEIGHT}px)`,
    display: 'flex',
    alignItems: 'center',
    paddingBottom: NAV_BAR_HEIGHT,
  },
  innerContainer: {
    maxWidth: '960px',
    width: '100%',
  },
}));

export const MainContent: FC = () => {
  const { classes } = useStyles();
  return (
    <Paper radius={0} className={classes.container}>
      <Container pt={'md'} className={classes.innerContainer}>
        <Questionnaire />
      </Container>
    </Paper>
  );
};
