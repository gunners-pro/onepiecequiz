import Head from 'next/head'
import bg from '../public/assets/bg.jpg';
import { Container, QuizContainer, Widget } from '../styles/pages/index';
import db from '../db.json'

import FooterWrapper from '../src/components/Footer';
import GithubCorner from '../src/components/GithubCorner';

const Home = ({ }) => {
  return (
    <Container backgroundImage="../../background.jpg">
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>One Piece</h1>
          </Widget.Header>
          <Widget.Content>
            <p>lorem ipsum dolor sit amet....</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <h1>One Piece</h1>
          <Widget.Content>
            <p>lorem ipsum dolor sit amet....</p>
          </Widget.Content>
        </Widget>
        <FooterWrapper />
      </QuizContainer>
      <GithubCorner projectUrl="http://github.com/gunners-pro" />

    </Container>
  )
}

export default Home;
