import { FC } from 'react';
import { Group, Header, Paper, Text } from '@mantine/core';
import { LightDarkButton } from './LightDarkButton';
import { NAV_BAR_HEIGHT } from '../constants/styling';

export const NavBar: FC = () => {
  return (
    <Header height={NAV_BAR_HEIGHT} p="lg">
      <Group position="apart">
        <Paper>
          <Text size="xl">HDD - Heart Disease Detector</Text>
        </Paper>
        <LightDarkButton />
      </Group>
    </Header>
  );
};
