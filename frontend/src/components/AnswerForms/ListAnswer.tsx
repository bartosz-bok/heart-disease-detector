import { Button, Group } from '@mantine/core';
import { FC } from 'react';
import { InputAnswerType } from '../../types/question';

type ListAnswerProps = {
  onSubmit: (answer: InputAnswerType) => void;
  answers: { id: number; answer: string; color: string }[];
};

export const ListAnswer: FC<ListAnswerProps> = ({ onSubmit, answers }) => {
  return (
    <Group position="center">
      {answers.map(({ id, answer, color }) => (
        <Button key={id} onClick={() => onSubmit(answer)} variant="light" color={color} size="lg">
          {answer}
        </Button>
      ))}
    </Group>
  );
};
