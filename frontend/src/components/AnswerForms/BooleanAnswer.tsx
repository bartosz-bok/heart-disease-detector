import { Button, Group } from '@mantine/core';
import { FC } from 'react';
import { InputAnswerType } from '../../types/question';

type BooleanAnswerProps = {
  onSubmit: (answer: InputAnswerType) => void;
};

export const BooleanAnswer: FC<BooleanAnswerProps> = ({ onSubmit }) => {
  return (
    <Group position="center">
      <Button onClick={() => onSubmit(false)} variant="light" color="red" size="lg">
        No
      </Button>
      <Button onClick={() => onSubmit(true)} variant="light" color="green" size="lg">
        Yes
      </Button>
    </Group>
  );
};
