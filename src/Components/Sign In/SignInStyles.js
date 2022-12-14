import styled from 'styled-components'

export const Div = styled.nav`
    height:100vh;
    width:100vw;
    display:grid;
    place-items: center;
`
export const Form = styled.form`
height:50vh;
width:30vw;
flex-direction: column;
border-radius: 3ch;
background: rgba(255,255,255,0.15);
margin:auto;
display: grid;
place-items:center;
backdrop-filter:blur(8.5px) ;
box-shadow: 0 8px 32px (31,38,135,0.37);
letter-spacing:0.4rem;
`

export const LinkStart = styled.h1`
margin : 2rem  0 2rem 0;
text-align:center;
color: #ffffff;
`

export const Input = styled.input`
background-color:rgba(255,255,255,0.15);
width:20vw;
height:1vh;
/* margin-top: 1rem; */
padding:1rem;
border:0;
outline:none;
border-radius: 5ch;
&:focus{
    display:inline-block;
    box-shadow: 0 0 0 0.1rem #b9abbe;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
    border:0px;
    width:20vw;
height:1vh;
}
&::placeholder{
    color : #000000;
    font-size: 1.5vh;
}
`

export const Button = styled.button`

width:10vw;
height:7vh;

/* margin-top: 3rem; */
border-radius: 1rem;
border: 0;
text-align:center;
font-size:2vh;
color:#ffffff;
background: #256ce1;
&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;}
`