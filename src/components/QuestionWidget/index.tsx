import React, { useState } from 'react';
import Button from '../Button';
import AlternativesForm from '../AlternativesForm';
import { Widget } from '../../../styles/components/QuestionWidget/styles';

interface IQuestions {
  question: {
    image: string;
    title: string;
    description: string;
    answer: number;
    alternatives: string[];
  };
  totalQuestions: number;
  questionIndex: number;
  handleSubmit: () => void;
  // eslint-disable-next-line no-unused-vars
  addResult(result: boolean): void;
}

const QuestionWidget: React.FC<IQuestions> = ({
  question, totalQuestions, questionIndex, handleSubmit, addResult,
}) => {
  const questionId = `question__${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const isCorrect = selectedAlternative === question.answer;
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
        src={question.image}
      />

      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <AlternativesForm onSubmit={(event) => {
          event.preventDefault();
          setIsQuestionSubmited(true);
          setTimeout(() => {
            addResult(isCorrect);
            handleSubmit();
            setIsQuestionSubmited(false);
            setSelectedAlternative(undefined);
          }, 3 * 1000);
        }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeID = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;

            return (
              <Widget.Topic
                key={alternativeID}
                as="label"
                htmlFor={alternativeID}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  name={questionId}
                  id={alternativeID}
                  type="radio"
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                />
                {` ${alternative}`}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={!hasAlternativeSelected}>Confirmar</Button>

          {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}

        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
};

export default QuestionWidget;
