import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, QuizContainer, Widget } from '../styles/pages/index';

import FooterWrapper from '../src/components/Footer';
import GithubCorner from '../src/components/GithubCorner';
import Input from '../src/components/Input';
import ButtonPlay from '../src/components/Button';

const Home = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  function sendToPageQuiz(event: FormEvent) {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

  return (
    <Container backgroundImage="../../background.jpg">

      <QuizContainer>
        <h1>One Piece Quiz</h1>
        <Widget>
          <Widget.Header>
            <h1>One Piece</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(event) => sendToPageQuiz(event)}>
              <Input onChange={(event) => setName(event.target.value)} placeholder="Diz aí seu nome" />
              <ButtonPlay type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </ButtonPlay>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <h1>Quizes da Galera</h1>
          <Widget.Content>
            <p>lorem ipsum dolor sit amet....</p>
          </Widget.Content>
        </Widget>
        <FooterWrapper />
      </QuizContainer>
      <GithubCorner projectUrl="http://github.com/gunners-pro" />

    </Container>
  );
};

export default Home;
