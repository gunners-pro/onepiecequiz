import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      success: string;
      contrastText: string;
      mainBg: string;
    }
  }
}
