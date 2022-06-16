import { QuestionsType, QuestionsWithAnswersType } from '../types/question';

export const getQuestionsWithAnswers = (
  questions: Array<QuestionsType>
): Array<QuestionsWithAnswersType> => {
  return questions.map((e) => ({ ...e, answer: undefined }));
};
