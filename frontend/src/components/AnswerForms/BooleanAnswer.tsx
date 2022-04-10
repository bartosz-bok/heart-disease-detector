import { Button, Group } from '@mantine/core';
import { FC } from 'react';
import { AnswerType, InputAnswerType } from '../../types/question';

type BooleanAnswerProps = {
  onSubmit: ({ answer, type }: InputAnswerType) => void;
};

export const BooleanAnswer: FC<BooleanAnswerProps> = ({ onSubmit }) => {
  return (
    <Group position="center">
      <Button
        onClick={() => onSubmit({ answer: false, type: AnswerType.BOOLEAN })}
        variant="light"
        color="red"
        size="lg">
        No
      </Button>
      <Button
        onClick={() => onSubmit({ answer: true, type: AnswerType.BOOLEAN })}
        variant="light"
        color="green"
        size="lg">
        Yes
      </Button>
    </Group>
  );
};
