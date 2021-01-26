import Head from 'next/head'

import { Title } from '../styles/pages/index';
import db from '../db.json'

const Home = ({ }) => {
  return (
    <Title theme={db.theme}>OnePiece Quiz</Title>
  )
}

export default Home;
