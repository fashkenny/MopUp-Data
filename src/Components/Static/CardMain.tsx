import React from 'react'
import {MdFavorite, MdVisibility} from 'react-icons/md'
import styled from 'styled-components'

import im from '../../Assets/170faabe67541983970404915123f792.png'

//props
interface iCard{
    bigImg: string,
    text: string,
    fav: number,
    views: string,
    label: string
    
}
const CardMain:React.FC<iCard> = ({bigImg, text, fav, views, label}) => {
  return (
    <div>
      <Container>
          <Card>
            <Image>
              <Img src={bigImg}/>
              <HoverItem>
                <HText>Skull Logo</HText>
            </HoverItem>
            </Image>
            <DownPart>
              <SmIcon src={im}/>
              <Texts>{text}</Texts>
              <Labels>{label}</Labels>
              <IconPart>
              <Icon1/>
              <View>{fav}</View>
              <Icon2/>
              <View>{views}</View>
              </IconPart>
            </DownPart>
            
          </Card>
      </Container>
    </div>
  )
}

const HoverItem = styled.div`
width: 100%;
background: rgb(249,249,249);
background: linear-gradient(0deg,  #0f0f0f 0%, rgba(0,0,0,0) 100%);
color: white;
opacity: 0;
height: 60px;
position: absolute;
bottom: 0px;
display: flex;
align-items: center;
justify-content: space-around;
transition: all 500ms;


`   
const HText = styled.div`
font-size: 20px;
`
const IconPart = styled.div`
display: flex;
`

const Container = styled.div`
height: 250px;
width: 280px;
background-color: white;
margin: 10px 0px;
border-radius: 10px 10px 0px 0px;
margin-right: 40px;
`
const SmIcon = styled.img`
height: 22px;
`
const Texts = styled.div`
font-size: 15px;
flex: 0.7;
`
const Labels = styled.div`
font-weight: 600;
font-size: 12px;

background-color: gray;
padding: 0.5px 2px;
color: white;
border-radius: 2px;
`
const Icon1 = styled(MdFavorite)`
margin-top: 1px;
margin: 3px
`
const Icon2 = styled(MdVisibility)`
margin-top: 1px;
margin: 3px
`
const View = styled.div``
const Main = styled.div``
const Card = styled.div`
height: 100%;
`
const Image = styled.div`
border-radius: 10px;
overflow: hidden;
background-color: gray;
height: 85%;
width: 100%;
position: relative;
cursor: pointer;
:hover ${HoverItem}{
    
    opacity: 1;

}
`
const Img = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
`
const DownPart = styled.div`
width: 96%;
height: 15%;
font-size: 13px;
display: flex;
justify-content: space-around;
align-items: center;

`

export default CardMain