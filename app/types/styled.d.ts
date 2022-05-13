import 'styled-components';
// interface IPalette {
//   main: string
//   contrastText: string
// }

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
    };
    media: {
      mobile1: string;
      mobile2: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
  }
}
