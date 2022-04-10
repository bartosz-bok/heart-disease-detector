import { FC } from 'react';
import { Header, Paper, Text } from '@mantine/core';
import { LightDarkButton } from './LightDarkButton';
import { NAV_BAR_HEIGHT } from '../constants/styling';

export const NavBar: FC = () => {
  return (
    <Header height={NAV_BAR_HEIGHT} p="lg">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}>
        <Paper>
          <Text>HDD - Heart Disease Detector</Text>
        </Paper>
        <LightDarkButton />
      </div>
    </Header>
  );
};
