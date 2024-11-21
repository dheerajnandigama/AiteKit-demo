import { createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'var(--font-inter)',
  headings: {
    fontFamily: 'var(--font-inter)',
  },
  colors: {
  },
  primaryColor: 'dark',
  components: {
    Button: {
      defaultProps: {
        size: 'md',
      },
    },
  },
});
