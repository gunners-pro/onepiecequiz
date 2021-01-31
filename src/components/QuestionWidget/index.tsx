import React from 'react';
import Button from '../Button';
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
}

function QuestionWidget({
  question, totalQuestions, questionIndex, handleSubmit,
}: IQuestions) {
  const questionId = `question__${questionIndex}`;

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

        <form onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeID = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic htmlFor={alternativeID}>
                <input name={questionId} id={alternativeID} type="radio" />
                {` ${alternative}`}
              </Widget.Topic>
            );
          })}

          <Button type="submit">Confirmar</Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

export default QuestionWidget;
