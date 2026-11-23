import { createTheme } from '@mui/material/styles';

export const colors = {
  background: '#101520',
  surface: '#181f2e',
  inset: '#141b29',
  line: '#344158',
  text: '#eff3fa',
  muted: '#aab8cc',
  blue: '#a6c4ff',
  buttonText: '#101d36',
  tag: '#253653',
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: colors.background, paper: colors.surface },
    primary: { main: colors.blue, contrastText: colors.buttonText },
    text: { primary: colors.text, secondary: colors.muted },
    divider: colors.line,
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: '"Inter Variable", Inter, system-ui, sans-serif',
    subtitle2: { fontSize: 12, fontWeight: 600, lineHeight: '17px' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':focus-visible': { outline: `2px solid ${colors.blue}`, outlineOffset: 3 },
        '::selection': { background: colors.blue, color: colors.buttonText },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { textTransform: 'none', borderRadius: 9, fontWeight: 600, padding: '12px 17px', minHeight: 46 },
        outlined: { borderColor: colors.line },
      },
    },
    MuiCard: {
      defaultProps: { variant: 'outlined' },
      styleOverrides: { root: { backgroundImage: 'none', borderColor: colors.line } },
    },
    MuiChip: {
      styleOverrides: {
        root: { height: 26, borderRadius: 6, backgroundColor: colors.tag, color: colors.blue, fontSize: 11, fontWeight: 500 },
        label: { paddingInline: 10 },
      },
    },
  },
});
