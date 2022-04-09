import { FC } from 'react';
import { Container, Paper } from '@mantine/core';
import { Cards } from '../components/Cards';
import { NAV_BAR_HEIGHT } from '../constants/styling';

export const MainContent: FC = () => {
  return (
    <Paper radius={0} style={{ height: `calc(100vh - ${NAV_BAR_HEIGHT}px)` }}>
      <Container pt={'md'}>
        <Cards />
      </Container>
    </Paper>
  );
};
