import { AnswerType, QuestionsType } from '../types/question';

export const QuestionsData: QuestionsType[] = [
  {
    id: 0,
    type: AnswerType.NUMBER,
    question: 'What is your BMI?',
    min: 0,
    max: 1000,
    precision: 2,
  },
  {
    id: 1,
    type: AnswerType.BOOLEAN,
    question: 'Are you smoking?',
  },
  {
    id: 2,
    type: AnswerType.BOOLEAN,
    question: 'Do you dring alcohol regularly?',
  },
  {
    id: 3,
    type: AnswerType.BOOLEAN,
    question: 'Have you had a stroke before?',
  },
  {
    id: 4,
    type: AnswerType.NUMBER,
    question: 'How would you rate your physical health (0-30)?',
    min: 0,
    max: 30,
    precision: 0,
  },
  {
    id: 5,
    type: AnswerType.NUMBER,
    question: 'How would you rate your mental health (0-30)?',
    min: 0,
    max: 30,
    precision: 0,
  },
  {
    id: 6,
    type: AnswerType.BOOLEAN,
    question: 'Do you have trouble walking?',
  },
  {
    id: 7,
    type: AnswerType.LIST,
    question: 'What is you sex assigned at birth?',
    answers: [
      {
        id: 0,
        answer: 'Female',
        color: 'pink',
      },
      {
        id: 1,
        answer: 'Male',
        color: 'blue',
      },
    ],
  },
  {
    id: 8,
    type: AnswerType.NUMBER,
    question: 'How old are you?',
    min: 0,
    max: 200,
    precision: 0,
  },
  {
    id: 9,
    type: AnswerType.LIST,
    question: 'What is your race?',
    answers: [
      {
        id: 0,
        answer: 'Black',
        color: 'dark',
      },
      {
        id: 1,
        answer: 'Other',
        color: 'blue',
      },
      {
        id: 2,
        answer: 'Hispanic',
        color: 'orange',
      },
      {
        id: 3,
        answer: 'Asian',
        color: 'yellow',
      },
      {
        id: 4,
        answer: 'White',
        color: 'gray',
      },
    ],
  },
  {
    id: 10,
    type: AnswerType.BOOLEAN,
    question: 'Are you diabetic?',
  },
  {
    id: 11,
    type: AnswerType.BOOLEAN,
    question: 'Physical activity?',
  },
  {
    id: 12,
    type: AnswerType.LIST,
    question: 'General health?',
    answers: [
      {
        id: 0,
        answer: 'Poor',
        color: 'red',
      },
      {
        id: 1,
        answer: 'Fair',
        color: 'orange',
      },
      {
        id: 2,
        answer: 'Good',
        color: 'yellow',
      },
      {
        id: 3,
        answer: 'Very Good',
        color: 'lime',
      },
      {
        id: 4,
        answer: 'Excellent',
        color: 'green',
      },
    ],
  },
  {
    id: 13,
    type: AnswerType.NUMBER,
    question: 'How many hours per day do you sleep on average?',
    min: 1,
    max: 24,
    precision: 0.5,
  },
  {
    id: 14,
    type: AnswerType.BOOLEAN,
    question: 'Do you have asthma?',
  },
  {
    id: 15,
    type: AnswerType.BOOLEAN,
    question: 'Do you have any kidney disease?',
  },
  {
    id: 16,
    type: AnswerType.BOOLEAN,
    question: 'Do you have skin cancer?',
  },
];
