import { Button, useMantineTheme, Badge, Card, Group, Text, Image } from '@mantine/core';
import { FC } from 'react';

type Props = {
  src: string;
};

export const MediaCard: FC<Props> = ({ src }) => {
  const theme = useMantineTheme();
  return (
    <Card shadow="sm" p="lg">
      <Card.Section>
        <Image src={src} height={160} alt="Norway" />
      </Card.Section>

      <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Text weight={500}>Dupa</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="xs" style={{ lineHeight: 1.5 }}>
        Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace
        holystone mizzenmast quarter crows nest nipperkin grog yardarm hempen halter furl. Swab
        barque interloper chantey doubloon starboard grog black jack gangway rutters.
      </Text>

      <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
        yeet
      </Button>
    </Card>
  );
};
