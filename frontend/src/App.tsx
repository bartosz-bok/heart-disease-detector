import { FC } from 'react';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useColorScheme, useHotkeys, useLocalStorage } from '@mantine/hooks';
import { NavBar } from './components/NavBar';
import { MainContent } from './views/MainContent';

const App: FC = () => {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          colorScheme,
          fontFamily: 'Roboto, sans-serif',
          primaryColor: 'dark',
          other: {
            textColor: 'rgb(249, 251, 251)',
            textColorDark: 'rgb(50, 76, 82)',
            accentColor1: 'rgb(0, 179, 219)',
            accentColor2: 'rgb(34 191 230)',
            backgroundColor1: 'rgb(249, 251, 251)',
            backgroundColor2: 'rgb(238, 242, 243)',
            backgroundColor3: 'rgb(226, 233, 235)',
          },
        }}>
        <NavBar />
        <MainContent />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
