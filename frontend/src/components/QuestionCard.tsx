import { FC } from 'react';
import { QuestionsWithAnswersType, InputAnswerType, AnswerType } from '../types/question';
import { BooleanAnswer } from './AnswerForms/BooleanAnswer';
import { ListAnswer } from './AnswerForms/ListAnswer';
import { NumberAnswer } from './AnswerForms/NumberAnswer';

type QuestionCardProps = {
  question: QuestionsWithAnswersType;
  onSubmit: (answer: InputAnswerType) => void;
};

export const QuestionCard: FC<QuestionCardProps> = ({ question, onSubmit }) => {
  switch (question.type) {
    case AnswerType.BOOLEAN:
      return <BooleanAnswer onSubmit={onSubmit} />;
    case AnswerType.NUMBER:
      return (
        <NumberAnswer
          min={question.min}
          max={question.max}
          precision={question.precision}
          value={question.answer}
          onSubmit={onSubmit}
        />
      );
    case AnswerType.LIST:
      return <ListAnswer answers={question.answers} onSubmit={onSubmit} />;
    default:
      return null;
  }
};
