import styled,{css} from 'styled-components'
import {MdPageview} from 'react-icons/md'
import {AiFillCopy} from 'react-icons/ai'

const card=css`
backface-visibility:hidden;
position:absolute;
top:0;
left:0;
transition: all 1s ease-in-out;
border-radius:2rem;
width:100%;
height:100%;

`

export const CardFront=styled.div`
${card};
transform: perspective(100rem);


img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`
export const CardBack=styled.div`
${card};
transform: perspective(100rem);
transform: perspective(100rem) rotateY(0.5turn);
font-size:1rem;

p{
    margin-bottom:1rem;
}
`

export const Main=styled.div`


`

export const Box=styled.div`
width:18rem;
cursor: pointer;
height:30rem;
position:relative;
transition: all 1s ease-in-out;
color:#FF0080;


&:hover ${CardFront}{
    
    transform:perspective(100rem) rotateY(0.5turn);


  

}

&:hover ${CardBack}{
    transform: perspective(100rem) rotateY(1turn);
 
}

`


export const P=styled.p`

font-size:1rem;
color:#FF0080;
margin-bottom:1rem;
margin-top:0.5rem;
`


export const Tab=styled.div`

display:grid;

grid-template-columns:repeat(3,1fr);
place-items:center;
`

export const Eye=styled(MdPageview)`

font-size:1.4rem;
color:#FF0080;
margin-bottom:1rem;
margin-top:0.5rem;
text-align:right;
cursor: pointer;
`

export const Copy=styled(AiFillCopy)`
cursor: pointer;
font-size:1.4rem;
color:#FF0080;
margin-bottom:1rem;
margin-top:0.5rem;
text-align:right;
`