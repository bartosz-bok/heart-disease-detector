export enum AnswerType {
  BOOLEAN = 'BOOLEAN',
  LIST = 'LIST',
  INTEGER = 'INTEGER',
  FLOAT = 'FLOAT',
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
  }[];
};

export type IntegerQuestion = QuestionBase & {
  type: AnswerType.INTEGER;
  defaultValue: number;
  min: number;
  max: number;
};

export type FloatQuestion = QuestionBase & {
  type: AnswerType.FLOAT;
  defaultValue: number;
  min: number;
  max: number;
};

export type QuestionsType = FloatQuestion | IntegerQuestion | ListQuestion | BooleanQuestion;

export type IntegerQuestionWithAnswer = IntegerQuestion & {
  answer: undefined | number;
};

export type FloatQuestionWithAnswer = FloatQuestion & {
  answer: undefined | number;
};

export type ListQuestionWithAnswer = ListQuestion & {
  answer: undefined | string;
};

export type BooleanQuestionWithAnswer = BooleanQuestion & {
  answer: undefined | boolean;
};

export type QuestionsWithAnswersType =
  | IntegerQuestionWithAnswer
  | FloatQuestionWithAnswer
  | ListQuestionWithAnswer
  | BooleanQuestionWithAnswer;

export const isIntegerQuestionWithAnswer = (
  question: QuestionsWithAnswersType
): question is IntegerQuestionWithAnswer => {
  return question.type === AnswerType.INTEGER;
};

export const isFloatQuestionWithAnswer = (
  question: QuestionsWithAnswersType
): question is FloatQuestionWithAnswer => {
  return question.type === AnswerType.FLOAT;
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
