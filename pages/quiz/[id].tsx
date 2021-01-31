import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import QuizExterno from '../../src/components/QuizExterno';

interface IQuizdaGaleraPage {
  questions: {
    image: string;
    title: string;
    description: string;
    answer: number;
    alternatives: string[];
  }[];
  externalBg: string;
  theme: {
    colors: {
      primary: string;
      secondary: string;
      success: string;
      contrastText: string;
      mainBg: string;
      wrong: string;
    }
  }
}

const QuizdaGaleraPage: React.FC<IQuizdaGaleraPage> = ({ questions, externalBg, theme }) => (
  <ThemeProvider theme={theme}>
    <QuizExterno externalBg={externalBg} externalQuestions={questions} />
  </ThemeProvider>
);

export default QuizdaGaleraPage;

// eslint-disable-next-line max-len
export const getServerSideProps: GetServerSideProps<IQuizdaGaleraPage> = async (context: GetServerSidePropsContext) => {
  const [projectName, githubUser] = context.query.id.toString().split('___');

  const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Falha ao obter resposta do servidor');
    }).catch(() => {
      // faça algo com o erro
    });

  return {
    props: {
      questions: dbExterno.questions,
      externalBg: dbExterno.bg,
      theme: dbExterno.theme,
    },
  };
};
