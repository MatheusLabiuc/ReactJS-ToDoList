// import styled from "styled-components";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


export const InputStyle = styled('input')({
  fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
  fontWeight: "5",
  lineHeight: "1.5",
  color: "rgba(79, 79, 79)",
  border: "1px solid white",
  fontSize: "16px",
  borderRadius: "6px",
  padding: "12px 12px",
  outline: "none",
  width: "300px"
});

 


export const ButtonStyle = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 15,
  lineHeight: 1.5,
  backgroundColor: 'rgba(250,228,89,0.0)',
  borderColor: '#0063cc',
  color:'#2a2a2a',
  outline:'none',
  fontWeight: 'bold',
  borderRadius:'28px',
  marginLeft:'1%',
  height:"50px",
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: 'rgba(250,228,89,0.7)',
    boxShadow: 'none',
  }
});