import GlobalStyle from '../styles/globals'
import { ThemeProvider } from 'styled-components';
import db from '../db.json';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={db.theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
