import { Button, Group, NumberInput } from '@mantine/core';
import { FC, useState } from 'react';
import { Check } from 'tabler-icons-react';
import { InputAnswerType } from '../../types/question';

type NumberAnswerProps = {
  value: number | undefined;
  min: number;
  max: number;
  precision: number;
  onSubmit: (answer: InputAnswerType) => void;
};

export const NumberAnswer: FC<NumberAnswerProps> = ({ onSubmit, value, min, max, precision }) => {
  const [inputValue, setInputValue] = useState<number | undefined>(value);

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === 'Enter' && inputValue) {
      onSubmit(inputValue);
    }
  };

  const handleChange = (e: number | undefined) => {
    setInputValue(e ? e : undefined);
  };

  const parseInput = (e: string | undefined) => {
    if (!e?.trim()) {
      return '';
    }
    if (+e < min || +e > max) {
      return inputValue?.toString();
    }
    return e
      ?.replace(/,/g, '.')
      .replace(/[^0-9.]/g, '')
      .toString();
  };

  return (
    <Group position="center" onKeyDown={handleKeyPress}>
      <NumberInput
        hideControls
        min={min}
        max={max}
        value={inputValue}
        precision={precision}
        onChange={handleChange}
        parser={parseInput}
      />
      <Button
        disabled={!inputValue}
        onClick={() => inputValue && onSubmit(inputValue)}
        variant="light"
        color="blue">
        <Check />
      </Button>
    </Group>
  );
};
