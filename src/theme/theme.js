export const theme = {
  colors: {
    primary: '#565EEF',
    primaryHover: '#33399b',
    white: '#FFFFFF',
    black: '#000000',
    background: '#F1F1F1',
    mainBackground: '#EAEEF6',
    gray: '#94A6BE',
    lightGray: '#D4DBE5',
    border: 'rgba(148, 166, 190, 0.4)',
    orange: '#FF6D00',
    orangeLight: '#FFE4C2',
    green: '#06B16E',
    greenLight: '#B4FDD1',
    purple: '#9A48F1',
    purpleLight: '#E9D4FF',
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  
  typography: {
    fontSize: {
      small: '10px',
      medium: '14px',
      large: '20px',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  
  breakpoints: {
    mobile: '495px',
    tablet: '660px',
    desktop: '1200px',
  },
  
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '10px',
    circle: '50%',
  },
  
  animation: {
    card: 'card-animation 500ms linear',
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: '#1A1A1A',
    mainBackground: '#2D2D2D',
    white: '#FFFFFF',
    black: '#E0E0E0',
  },
};