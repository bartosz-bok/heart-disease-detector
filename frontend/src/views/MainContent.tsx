import { FC } from 'react';
import { Container, createStyles, Paper } from '@mantine/core';
import { NAV_BAR_HEIGHT } from '../constants/styling';
import { Questionnaire } from '../components/Questionnaire';

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.colorScheme === 'dark' ? undefined : theme.other.backgroundColor1,
    height: `calc(100vh - ${NAV_BAR_HEIGHT}px)`,
    paddingTop: '20vh',
  },
}));

export const MainContent: FC = () => {
  const { classes } = useStyles();
  return (
    <Paper radius={0} className={classes.container}>
      <Container pt={'md'}>
        <Questionnaire />
      </Container>
    </Paper>
  );
};
