import { Html, Head, NextScript, Main } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import { theme } from '../styles/theme';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google" content="notranslate" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
