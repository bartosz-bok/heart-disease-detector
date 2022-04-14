export enum AnswerType {
  BOOLEAN = 'BOOLEAN',
  LIST = 'LIST',
  NUMBER = 'NUMBER',
}

type QuestionBase = {
  id: number;
  question: string;
};

export type BooleanQuestion = QuestionBase & {
  type: AnswerType.BOOLEAN;
};

export type ListQuestion = QuestionBase & {
  type: AnswerType.LIST;
  answers: {
    id: number;
    answer: string;
    color: string;
  }[];
};

export type NumberQuestion = QuestionBase & {
  type: AnswerType.NUMBER;
  min: number;
  max: number;
  precision: number;
};

export type QuestionsType = NumberQuestion | ListQuestion | BooleanQuestion;

export type NumberQuestionWithAnswer = NumberQuestion & {
  answer: undefined | number;
};

export type ListQuestionWithAnswer = ListQuestion & {
  answer: undefined | string;
};

export type BooleanQuestionWithAnswer = BooleanQuestion & {
  answer: undefined | boolean;
};

export type QuestionsWithAnswersType =
  | NumberQuestionWithAnswer
  | ListQuestionWithAnswer
  | BooleanQuestionWithAnswer;

export const isNumberQuestionWithAnswer = (
  question: QuestionsWithAnswersType
): question is NumberQuestionWithAnswer => {
  return question.type === AnswerType.NUMBER;
};

export const isListQuestionWithAnswer = (
  question: QuestionsWithAnswersType
): question is ListQuestionWithAnswer => {
  return question.type === AnswerType.LIST;
};

export const isBooleanQuestionWithAnswer = (
  question: QuestionsWithAnswersType
): question is BooleanQuestionWithAnswer => {
  return question.type === AnswerType.BOOLEAN;
};

export type InputAnswerType = boolean | string | number;
