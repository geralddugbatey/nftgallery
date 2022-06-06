import styled ,{css} from 'styled-components';
import {IoCloseSharp} from 'react-icons/io5'
import {TiArrowSortedDown} from 'react-icons/ti'
export const Div =styled.div `

grid-column: container-start / container-end;

background:black;
color:#FF0080;
position:relative;


`    

export const Tell = styled.div`

position:fixed;
width:100%;

transition:0.4s ease-in-out all;
z-index:4;
top:${({flick})=>(
    flick?'0':'-100%'
)};

`

export const Warn=styled.div`
background:#FF0080;
position:relative;
text-align:center;
p{
    font-size:1rem;
    padding:1rem;
    color:black;
}
`

export const Close = styled(IoCloseSharp)`
position:absolute;
left:0;

font-size:1.3rem;
margin:1rem;
cursor:pointer;
color:black;
`

export const In = styled.div`
position:relative;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
margin-left:auto;
margin-right:auto;
width:80%;
margin-top:2rem;
input{

    
    border: solid 1px #FF0080;
    width:14rem;
    outline:none;
    padding:0.4rem;
    margin:0.6rem;
    background:black;
    color:#FF0080;

}
input::placeholder{
    color:#FF0080;
}



`

export const Togg=styled.div`
margin:1rem;
width:10rem;
display:flex;
justify-content:${({isCollection})=>(
    isCollection?'flex-start' :'center'
)};

border:${({isCollection})=>(
    isCollection?'solid 1px #FF0080;' :'solid 1px black;'
)};
border-radius:2em;
position:relative;
transition:0.6s ease-in-out;
`

const format = css`

color:#FF0080;
font-size:3rem;
position:fixed;
bottom:0;
cursor: pointer;
`

export const Left =styled(TiArrowSortedDown)`
${format};
transform:rotate(90deg);
left:0;
opacity:${({left})=>(
    left? '1' :'0'
)}

`
export const Right =styled(TiArrowSortedDown)`
${format}
transform:rotate(270deg);
right:0;
opacity:${({right})=>(
    right? '1' :'0'
)}

`

export const Circle=styled.div`

height:2rem;
width:2rem;
background:  #FF0080;
border-radius:50%;

cursor: pointer;
transition:0.3s ease-in-out;
transform:${({isCollection})=>(
    isCollection?'translateX(126px)' :'translateX(0)'
)};
`

export const Sec=styled.div`
position: relative;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`

export const Button=styled.div`


font-size:1rem;
padding:0.6rem;
margin-top:1rem;
margin-bottom:1rem;
border-radius:0.7em;
background:  #FF0080;
color:black;
cursor: pointer;

`

export const Container=styled.div`

grid-column:center-start / center-end;


`

export const Inside=styled.div`

padding:1rem;
display:grid;
grid-template-columns: repeat(auto-fit,18rem);
grid-gap:3rem;
place-content:center;



`