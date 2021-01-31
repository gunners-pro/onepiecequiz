/* eslint-disable indent */
import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import { Container, QuizContainer, Widget } from '../styles/pages/quiz';
import db from '../db.json';
import QuestionWidget from '../src/components/QuestionWidget';

interface IResultProps {
  results: boolean[];
}

const ResultWidget: React.FC<IResultProps> = ({ results }) => (
  <Widget>
    <Widget.Header>
      Resultado
    </Widget.Header>
    <Widget.Content>
      <p>
        Você acertou
        {' '}
        {/* {result.reduce((acc, resultAtual) => {
          const isRight = resultAtual === true;
          if (isRight) {
            return acc + 1;
          }
          return acc;
        }, 0)} */}
        {results.filter((result) => result).length}
        {' '}
        perguntas
      </p>
      <ul>
        {
          results.map((result, index) => (
            <li key={`index_${index + 1}`}>
              #
              {index + 1}
              {' '}
              Resultado:
              {' '}
              {result ? 'Acertou' : 'Errou'}
            </li>
          ))
        }
      </ul>
    </Widget.Content>
  </Widget>
);

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
  const [results, setResults] = useState([]);
  const totalQuestions = db.questions.length;
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = db.questions[questionIndex];

  function addResult(result: boolean) {
    setResults([...results, result]);
  }

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
              addResult={addResult}
            />
          )
        }

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}

      </QuizContainer>
    </Container>
  );
};

export default Quiz;
