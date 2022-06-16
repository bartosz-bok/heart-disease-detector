import { FC, useEffect, useState } from 'react';
import { QuestionCard } from './QuestionCard';
import { QuestionsData } from '../constants/QuestionsData';
import { getQuestionsWithAnswers } from '../transformers/questions';
import { InputAnswerType, QuestionsWithAnswersType } from '../types/question';
import { Button, Card, Center, createStyles, Group, Paper, Title } from '@mantine/core';
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

  const handleSubmit = (answer: InputAnswerType) => {
    setQuestions((prev) => [
      ...prev.map((e) =>
        e.id === currentQuestionId ? ({ ...e, answer } as QuestionsWithAnswersType) : e
      ),
    ]);

    goToNextQuestion();
  };

  useEffect(() => {
    updateNavigation();
  }, [currentQuestionId]);

  useEffect(() => {
    console.group('data');
    questions.forEach((e) => console.log(`${e.question}: `, e.answer));
    console.groupEnd();
  }, [questions]);

  return (
    <>
      <Card radius={15} shadow="sm" pb={50} className={classes.card}>
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

        <Paper radius={15} p={50} m={40} className={classes.paper}>
          <Center>
            <Title order={3} className={classes.question}>
              {questions[currentQuestionId].question}
            </Title>
          </Center>
        </Paper>
        <QuestionCard
          key={questions[currentQuestionId].id}
          question={questions[currentQuestionId]}
          onSubmit={handleSubmit}
        />
      </Card>
    </>
  );
};
