import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      success: string;
      contrastText: string;
      mainBg: string;
    }
  }
}
