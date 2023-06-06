import {createTheme} from '@mui/material';

export const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === 'contained' &&
              ownerState.color === 'primary' && {
                backgroundColor: '#E76161',
                color: '#fff',
              }),
          }),
        },
      },
    },
  });