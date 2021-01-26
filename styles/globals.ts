import { createGlobalStyle } from 'styled-components';
import db from '../db.json';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = db.theme;

// html,
// body {
//   padding: 0;
//   margin: 0;
//   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
//     Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
// }

// a {
//   color: inherit;
//   text-decoration: none;
// }

// * {
//   box-sizing: border-box;
// }
