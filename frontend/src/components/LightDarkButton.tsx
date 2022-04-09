import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { FC } from 'react';
import { Sun, MoonStars } from 'tabler-icons-react';

export const LightDarkButton: FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme">
      {dark ? <Sun size={18} /> : <MoonStars size={18} />}
    </ActionIcon>
  );
};
