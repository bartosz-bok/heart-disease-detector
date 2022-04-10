import { FC, useEffect, useState } from 'react';
import { QuestionCard } from './QuestionCard';
import { QuestionsData } from '../constants/QuestionsData';
import { getQuestionsWithAnswers } from '../transformers/questions';
import {
  AnswerType,
  InputAnswerType,
  isBooleanQuestionWithAnswer,
  isFloatQuestionWithAnswer,
  isIntegerQuestionWithAnswer,
  isListQuestionWithAnswer,
  QuestionsWithAnswersType,
} from '../types/question';
import { Button, Card, Center, createStyles, Group, Paper, Title, Text } from '@mantine/core';
import { ArrowNarrowLeft, ArrowNarrowRight } from 'tabler-icons-react';

const questionsWithAnswers = getQuestionsWithAnswers(QuestionsData);

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? undefined : theme.other.backgroundColor2,
  },
  group: {
    marginBottom: 5,
    marginTop: theme.spacing.sm,
  },
  topSection: {
    padding: 20,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.other.accentColor1,
    color: theme.colorScheme === 'dark' ? undefined : theme.other.textColor,
    fontWeight: 600,
  },
  paper: {
    backgroundColor: theme.colorScheme === 'dark' ? undefined : theme.other.backgroundColor3,
  },
  question: {
    color: theme.colorScheme === 'dark' ? undefined : theme.other.textColorDark,
  },
  buttons: {
    button: {
      borderRadius: 0,
    },
    '& > *:not([disabled])': {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.other.accentColor2,
    },
    '& > button:first-of-type': {
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 10,
      '&:not([disabled]):hover': {
        backgroundColor: 'orange',
        '& *': {
          backgroundColor: 'orange',
        },
      },
    },

    '& > button:last-of-type': {
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,
      '&:not([disabled]):hover': {
        backgroundColor: 'orange',
        '& *': {
          backgroundColor: 'orange',
        },
      },
    },
  },
}));

export const Questionnaire: FC = () => {
  const { classes } = useStyles();

  // TODO: useReducer instead of multiple states that depend on each other
  const [questions, setQuestions] = useState<Array<QuestionsWithAnswersType>>(questionsWithAnswers);
  const [currentQuestionId, setCurrentQuestion] = useState<number>(0);
  const [prevAvaliable, setPrevAvaliable] = useState(false);
  const [nextAvaliable, setNextAvaliable] = useState(false);

  const updateNavigation = () => {
    setNextAvaliable(
      currentQuestionId + 1 < questionsWithAnswers.length &&
        questions[currentQuestionId]?.answer !== undefined
    );
    setPrevAvaliable(currentQuestionId > 0);
  };

  const goToNextQuestion = () => {
    if (questions[currentQuestionId].id + 1 >= questionsWithAnswers.length) {
      setTimeout(() => alert('done'), 0);
      return;
    }
    setCurrentQuestion((prev) => prev + 1);
  };

  const goToPrevoiusQuestion = () => {
    if (questions[currentQuestionId].id - 1 < 0) {
      return;
    }
    setCurrentQuestion((prev) => prev - 1);
  };

  const handleSubmit = ({ answer, type }: InputAnswerType) => {
    switch (type) {
      case AnswerType.BOOLEAN: {
        setQuestions((prev) => [
          ...prev.map((e) =>
            e.id === currentQuestionId && isBooleanQuestionWithAnswer(e) ? { ...e, answer } : e
          ),
        ]);
        break;
      }
      case AnswerType.INTEGER: {
        setQuestions((prev) => [
          ...prev.map((e) =>
            e.id === currentQuestionId && isIntegerQuestionWithAnswer(e) ? { ...e, answer } : e
          ),
        ]);
        break;
      }
      case AnswerType.FLOAT: {
        setQuestions((prev) => [
          ...prev.map((e) =>
            e.id === currentQuestionId && isFloatQuestionWithAnswer(e) ? { ...e, answer } : e
          ),
        ]);
        break;
      }
      case AnswerType.LIST: {
        setQuestions((prev) => [
          ...prev.map((e) =>
            e.id === currentQuestionId && isListQuestionWithAnswer(e) ? { ...e, answer } : e
          ),
        ]);
        break;
      }
    }
    goToNextQuestion();
  };

  useEffect(() => {
    updateNavigation();
  }, [currentQuestionId]);

  return (
    <>
      <Card radius={15} shadow="sm" p="lg" className={classes.card}>
        <Card.Section className={classes.topSection}>
          <Group position="apart">
            <Group spacing={0} className={classes.buttons}>
              <Button disabled={!prevAvaliable} onClick={goToPrevoiusQuestion}>
                <ArrowNarrowLeft />
              </Button>
              <Button disabled={!nextAvaliable} onClick={goToNextQuestion}>
                <ArrowNarrowRight />
              </Button>
            </Group>
            <Title order={2}>
              Question&nbsp;&nbsp;{currentQuestionId + 1}&nbsp;/&nbsp;{questionsWithAnswers.length}
            </Title>
          </Group>
        </Card.Section>

        <Paper p={50} m={40} className={classes.paper}>
          <Center>
            <Title order={3} className={classes.question}>
              {questions[currentQuestionId].question}
            </Title>
          </Center>
        </Paper>
        <QuestionCard question={questions[currentQuestionId]} onSubmit={handleSubmit} />
        {questions.map((e) => (
          <Text key={e.id}>
            {e.question}: {e.answer?.toString()}
          </Text>
        ))}
      </Card>
    </>
  );
};
