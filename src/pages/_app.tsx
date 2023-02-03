import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
