import React from 'react';
import { Container, QuizContainer, Widget } from '../styles/pages/index';

import FooterWrapper from '../src/components/Footer';
import GithubCorner from '../src/components/GithubCorner';

const Home = () => (
  <Container backgroundImage="../../background.jpg">

    <QuizContainer>
      <h1>One Piece Quiz</h1>
      <Widget>
        <Widget.Header>
          <h1>One Piece</h1>
        </Widget.Header>
        <Widget.Content>
          <p>lorem ipsum dolor sit amet....</p>
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

export default Home;
