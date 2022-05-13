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
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
  }
}
