import React from 'react'
import styled from 'styled-components'


interface iButton{
    width:string;
    text:string;
    bcc:string;
    height:string;
}

const GlobalButton:React.FC<iButton> = ({width,bcc,text,height}) => {
  return (
    <div>
        <Container bcc={`${bcc}`} height={`${height}`} width={`${width}`}>
           {text}
        </Container>
    </div>
  )
}

export default GlobalButton

const Container = styled.div<{bcc:string;height:string;width:string}>`
background-color: ${(props)=> props.bcc};
height: ${(props)=>props.height};
width: ${(props)=>props.width};
display: flex;
align-items: center;
justify-content: center;
color: white;
border-radius: 5px;
cursor: pointer;
transition: all 300ms;
margin-right: 10px;

:hover{
    transform: scale(1.05);
}
`