import { FC } from 'react';
import {
  QuestionsWithAnswersType,
  isIntegerQuestionWithAnswer,
  isBooleanQuestionWithAnswer,
  InputAnswerType,
} from '../types/question';
import { BooleanAnswer } from './AnswerForms/BooleanAnswer';
import { IntegerAnswer } from './AnswerForms/IntegerAnswer';

type QuestionCardProps = {
  question: QuestionsWithAnswersType;
  onSubmit: ({ answer, type }: InputAnswerType) => void;
};

export const QuestionCard: FC<QuestionCardProps> = ({ question, onSubmit }) => {
  const renderSwitch = (question: QuestionsWithAnswersType) => {
    if (isIntegerQuestionWithAnswer(question)) {
      return (
        <IntegerAnswer
          min={question.min}
          max={question.max}
          value={question.answer}
          defaultValue={question.defaultValue}
          onSubmit={onSubmit}
        />
      );
    }
    if (isBooleanQuestionWithAnswer(question)) {
      return <BooleanAnswer onSubmit={onSubmit} />;
    }
    return <BooleanAnswer onSubmit={onSubmit} />;
  };

  return renderSwitch(question);
};
