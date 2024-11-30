import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const BackButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    padding: '10px 14px 14px 14px',
    border: '1px solid rgba(255, 255, 255, 0)',
    lineHeight: 1,
    minWidth: 160,
    whiteSpace: 'nowrap',
    fontFamily: [
      'Barlow',
    ].join(','),
    '&:hover': {
      backgroundColor: '#cccccc',
      borderColor: '#cccccc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#cccccc',
      borderColor: '#cccccc',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(231,190,132,.5)',
    },
});

export default BackButton