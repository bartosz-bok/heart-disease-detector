import { FC } from 'react';
import {
  QuestionsWithAnswersType,
  isBooleanQuestionWithAnswer,
  InputAnswerType,
  isNumberQuestionWithAnswer,
  isListQuestionWithAnswer,
} from '../types/question';
import { BooleanAnswer } from './AnswerForms/BooleanAnswer';
import { ListAnswer } from './AnswerForms/ListAnswer';
import { NumberAnswer } from './AnswerForms/NumberAnswer';

type QuestionCardProps = {
  question: QuestionsWithAnswersType;
  onSubmit: (answer: InputAnswerType) => void;
};

export const QuestionCard: FC<QuestionCardProps> = ({ question, onSubmit }) => {
  const renderSwitch = (question: QuestionsWithAnswersType) => {
    if (isNumberQuestionWithAnswer(question)) {
      return (
        <NumberAnswer
          min={question.min}
          max={question.max}
          precision={question.precision}
          value={question.answer}
          onSubmit={onSubmit}
        />
      );
    }
    if (isListQuestionWithAnswer(question)) {
      return <ListAnswer onSubmit={onSubmit} answers={question.answers} />;
    }
    if (isBooleanQuestionWithAnswer(question)) {
      return <BooleanAnswer onSubmit={onSubmit} />;
    }
    return <BooleanAnswer onSubmit={onSubmit} />;
  };

  return renderSwitch(question);
};
