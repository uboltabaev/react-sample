import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const NextButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    padding: '10px 14px 14px 14px',
    border: '1px solid',
    lineHeight: 1,
    borderColor: '#E7BE84',
    minWidth: 160,
    whiteSpace: 'nowrap',
    fontFamily: [
      'Barlow',
    ].join(','),
    '&:hover': {
      backgroundColor: '#E7BE84',
      borderColor: '#E7BE84',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#E7BE84',
      borderColor: '#E7BE84',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(231,190,132,.5)',
    },
});

export default NextButton