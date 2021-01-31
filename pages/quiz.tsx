import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import { Container, QuizContainer, Widget } from '../styles/pages/quiz';
import db from '../db.json';
import QuestionWidget from '../src/components/QuestionWidget';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

function handleSubmitQuiz(
  setQuestionIndex: Dispatch<SetStateAction<number>>,
  questionIndex: number,
  totalQuestions: number,
  setScreenState: Dispatch<SetStateAction<string>>,
) {
  const nextQuestion = questionIndex + 1;
  if (nextQuestion < totalQuestions) {
    setQuestionIndex(nextQuestion);
  } else {
    setScreenState(screenStates.RESULT);
  }
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

const Quiz: React.FC = () => {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = db.questions[questionIndex];

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  return (
    <Container backgroundImage="../../bg2.jpg">
      <QuizContainer>
        <h1>One Piece Quiz</h1>

        {
          screenState === screenStates.QUIZ && (
            <QuestionWidget
              questionIndex={questionIndex}
              question={question}
              totalQuestions={totalQuestions}
              handleSubmit={
                () => {
                  handleSubmitQuiz(setQuestionIndex, questionIndex, totalQuestions, setScreenState);
                }
              }
            />
          )
        }

        {screenState === screenStates.LOADING && (<LoadingWidget />)}

        {screenState === screenStates.RESULT && <div>Voce acertou x questões, parabéns</div>}

      </QuizContainer>
    </Container>
  );
};

export default Quiz;
