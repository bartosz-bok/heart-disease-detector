import { AnswerType, QuestionsType } from '../types/question';

export const QuestionsData: QuestionsType[] = [
  {
    id: 0,
    type: AnswerType.BOOLEAN,
    question: 'Are you happy?',
  },
  {
    id: 1,
    type: AnswerType.BOOLEAN,
    question: 'Another question?',
  },
  {
    id: 2,
    type: AnswerType.INTEGER,
    question: '1 + 1 =',
    min: 1,
    max: 10,
    defaultValue: 20,
  },
  {
    id: 3,
    type: AnswerType.BOOLEAN,
    question: 'asdfafadfasdg sd agasd?',
  },
];
