import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from '../src/components/Link';
import { Container, QuizContainer, Widget } from '../styles/pages/index';
import db from '../db.json';

import GithubCorner from '../src/components/GithubCorner';
import Input from '../src/components/Input';
import ButtonPlay from '../src/components/Button';
import Footer from '../src/components/Footer';

const Home = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  function sendToPageQuiz(event: FormEvent) {
    event.preventDefault();
    router.push({ pathname: '/quiz', query: { name } });
  }

  return (
    <Container backgroundImage="../../background.jpg">

      <QuizContainer>
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>One Piece Quiz</h1>
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

        <Widget
          as={motion.section}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <h1>Quizes da Galera</h1>
          <Widget.Content>
            <ul>
              {
                db.external.map((item, index) => {
                  const [projectName, githubUser] = item
                    .replace(/\//g, '')
                    .replace('https:', '')
                    .replace('.vercel.app', '')
                    .split('.');

                  return (
                    <li key={`link__${index.toString()}`}>
                      <Widget.Topic as={Link} href={`/quiz/${projectName}___${githubUser}`}>
                        {`${githubUser}/${projectName}`}
                      </Widget.Topic>
                    </li>
                  );
                })
              }
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GithubCorner projectUrl="https://github.com/gunners-pro/onepiecequiz" />

    </Container>
  );
};

export default Home;
