import { createTheme } from '@mui/material/styles/'

const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff'
      }
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label': {
                        color: '#fff',
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: '#3E68A8',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#fff',
                        },
                        '&:hover fieldset': {
                            borderColor: '#fff',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#fff',
                        },
                    },
                    '& .MuiInputBase-root': {
                      color: '#fff'
                    },
                    '& p': {
                      fontSize: '14px !important',
                      textAlign: 'left !important',
                      paddingBottom: '0 !important'
                    }
                }
            }
        },
        MuiInputLabel: {
          styleOverrides: {
            root: {
              color: '#fff'
            }
          }
        },
        MuiSelect: {
          styleOverrides: {
            root: {
              color: '#fff',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#fff'
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#fff'
              },
              '&:hover': {
                "&& fieldset": {
                  borderColor: "#fff"
                }
              },
            },
            icon: {
              fill: '#fff'
            }
          }
        }
    }
});

export default theme