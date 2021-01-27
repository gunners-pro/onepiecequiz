import Head from 'next/head'
import bg from '../public/assets/bg.jpg';
import { Container, QuizContainer, Widget } from '../styles/pages/index';
import db from '../db.json'

const Home = ({ }) => {
  return (
    <Container>
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
          <p>lorem ipsum dolor sit amet....</p>
        </Widget>
      </QuizContainer>
    </Container>
  )
}

export default Home;
