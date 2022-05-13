import { DefaultTheme } from 'styled-components';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
} as const;

const colors = {
  main: 'red',
} as const;

const media = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  tablet: `(max-width: ${breakpoints.tablet})`,
  laptop: `(max-width: ${breakpoints.laptop})`,
  desktop: `(max-width: ${breakpoints.desktop})`,
} as const;

const theme: DefaultTheme = {
  colors,
  media,
} as const;

export default theme;
