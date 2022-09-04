import { extendTheme, type ThemeOverride } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgColor: '#f4f4f4'
      }
    }
  },
  sizes: extendSize(5.5)
} as ThemeOverride);

function extendSize(...sizes: number[]) {
  const res: Record<string, string> = {};

  for (const size of sizes) res[size.toString()] = size * 8 + 'px';

  return res;
}
