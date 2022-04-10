import { Button, Group, NumberInput } from '@mantine/core';
import { FC, useState } from 'react';
import { Check } from 'tabler-icons-react';
import { AnswerType, InputAnswerType } from '../../types/question';

type IntegerAnswerProps = {
  value: number | undefined;
  min: number;
  max: number;
  defaultValue: number;
  onSubmit: ({ answer, type }: InputAnswerType) => void;
};

export const IntegerAnswer: FC<IntegerAnswerProps> = ({ onSubmit, value, defaultValue }) => {
  const [inputValue, setInputValue] = useState<number>(value || defaultValue);
  return (
    <Group position="center">
      <NumberInput
        value={inputValue}
        min={1}
        max={130}
        defaultValue={defaultValue}
        onChange={(e) => e && setInputValue(e)}
      />
      <Button
        onClick={() =>
          onSubmit({
            answer: inputValue || defaultValue,
            type: AnswerType.INTEGER,
          })
        }
        variant="light"
        color="blue">
        <Check />
      </Button>
    </Group>
  );
};
