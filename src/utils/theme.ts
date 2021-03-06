export default {
  useBorderBox: true,
  breakpoints: ['321px', '600px', '960px', '1280px', '1920px', '2400px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: ['0.00938em', '0.02857em'],
  colors: {
    text: '#000',
    primary: '#005E73',
    dark: '#004150',
    light: '#337e8f',
    accent: '#00fff0',
    background: '#fafaf6',
    white: '#FFF',
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
  ],
  radii: ['4px', '6px', '8px', '12px'],
  borders: ['.4px solid #2c4247', '1px solid #2c4247', '.4px solid lightgray'],
  layout: {
    header: {
      bg: 'primary',
    },
    main: {
      bg: 'background',
    },
  },
  forms: {
    input: {
      outline: 0,
      border: 2,
      transition: 'all 0.2s',
      borderRadius: 1,
      '&:focus': {
        zIndex: 1,
        background: 'transparent',
        boxShadow: `0 0 0 2px #337e8f`,
      },
    },
    fieldError: {
      outline: 0,
      border: '.4px solid crimson',
      background: 'transparent',
      boxShadow: '0 0 0 2px crimson',
      transition: 'all 0.2s',
      borderRadius: 1,
      '&:focus': {
        zIndex: 1,
        background: 'transparent',
      },
    },
  },
  text: {
    fieldError: {
      fontSize: 2,
      fontWeight: 'body',
      color: 'crimson',
    },
    success: {
      fontSize: 2,
      fontWeight: 'body',
      color: 'green',
    },
  },
  typography: {
    body: {
      fontSize: [2, 2, 3],
      fontWeight: 'body',
      lineHeight: 'body',
      letterSpacing: 0,
    },
    button: {
      fontWeight: 500,
      fontSize: 2,
      lineHeight: 1.75,
      letterSpacing: 1,
      textTransform: 'uppercase',
    },
  },
  headings: {
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [6, 6, 6, 6, 6, 8],
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [5, 5, 5, 5, 5, 6],
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [4, 4, 4, 4, 4, 5],
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [3, 3, 3, 3, 3, 4],
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [2, 2, 2, 2, 2, 3],
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [1, 1, 1, 1, 1, 2],
    },
  },
  buttons: {
    contained: {
      display: 'inline-block',
      letterSpacing: 0,
      minWidth: '100px',
      padding: 2,
      textAlign: 'center',
      textDecoration: 'none',
      fontFamily: 'body',
      borderRadius: 0,
      color: 'white',
      boxShadow: 2,
      backgroundColor: 'primary',
      transition: 'all .222s cubic-bezier(0.4, 0, 1, 1)',
      '&:hover': {
        backgroundColor: 'dark',
        boxShadow: 3,
        transform: 'translateY(-1px)',
      },
      '&:focus': {
        backgroundColor: 'dark',
        boxShadow: 3,
      },
    },
  },
  // Root for body defaults, others for MDX
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 3,
      button: {
        cursor: 'pointer',
      },
      a: {
        cursor: 'pointer',
        color: 'dark',
      },
    },
    hr: {
      height: '1px',
      background: 'lightgray',
      opacity: 0.6,
      border: 'inherit',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'dark',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
};
