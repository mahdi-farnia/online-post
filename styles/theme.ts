import { extendTheme, StyleFunctionProps, type ThemeOverride } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: ({ colorMode }: StyleFunctionProps) => ({
      body: {
        backgroundColor: colorMode === 'dark' ? '#151615' : '#f4f4f4'
      }
    })
  },
  colors: {
    card: {
      light: '#fff',
      dark: '#000'
    }
  },
  sizes: extendSize(5.5),
  config: {
    useSystemColorMode: true,
    initialColorMode: 'light'
  }
} as ThemeOverride);

function extendSize(...sizes: number[]) {
  const res: Record<string, string> = {};

  for (const size of sizes) res[size.toString()] = size * 8 + 'px';

  return res;
}
