/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import { useRouter } from 'next/router';
import { Container, QuizContainer, Widget } from '../../../styles/pages/quiz';
import QuestionWidget from '../QuestionWidget';

interface IResultProps {
  results: boolean[];
}

interface IQuizExterno {
  externalQuestions: {
    image: string;
    title: string;
    description: string;
    answer: number;
    alternatives: string[];
  }[];
  externalBg: string;
}

const ResultWidget: React.FC<IResultProps> = ({ results }) => {
  const router = useRouter();

  return (
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
          {' '}
          {router.query.name}
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
};

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

const QuizExterno: React.FC<IQuizExterno> = ({ externalQuestions, externalBg }) => {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const totalQuestions = externalQuestions.length;
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = externalQuestions[questionIndex];

  function addResult(result: boolean) {
    setResults([...results, result]);
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  return (
    <Container backgroundImage={externalBg}>
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

export default QuizExterno;
