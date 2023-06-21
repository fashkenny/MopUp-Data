import React from 'react'
import styled from 'styled-components'
// import hero from "../Assets/hero.jpeg"
// import hero from "../Assets/blogg.jpg"
import hero from "../Assets/hero2.jpeg"
import herovid from '../Assets/sas.mp4'
import GlobalButton from '../Components/Static/GlobalButton'

const Hero = () => {

  const inda = [
    {name: 'Discover'}, {name: 'Animation'}, 
    {name: 'Branding'}, {name: 'Illustration'}, 
    {name: 'Mobile'},  {name: 'Print'},  {name: 'Product'}, 
    {name: 'Design'}, {name: 'Typography'}, {name: 'Web'}
    
  ]

  return (
    <div>
        
        <Container>
        <BgVideo src={herovid} autoPlay loop muted/> 
            <Wrapper>
              <IconHOld>
               {inda.map((el)=>{
                 return(<Icona> {el.name}</Icona>)
               })}
              </IconHOld>
              <Title>
                Get Your New Book With Best  Price Find Your Book Now
                </Title>
                <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunta sunt quaerat, eligendi ad, ipsum sit culpa porro fuga atque andersi delectus nostrum sapiente cupiditate.
                </Desc>
                <SearchBox>
                    <Input placeholder='KeyWord'/>
                    <Dash></Dash>
                    <Select>
                        <option value="Category">Category</option>
                        <option value="Education">Education</option>
                        <option value="Fine Art">Fine Art</option>
                        <option value="History">History</option>
                    </Select>
                    <Dash></Dash>
                    <Select>
                        <option value="Writer">Writer</option>
                        <option value="Dc Valerian">Dc Valerian</option>
                        <option value="Willams Daniel">Willams Daniel</option>
                        <option value="Thywill">Thywill </option>
                    </Select>
                    <GlobalButton text='Search' bcc='#EA530D' width='100px' height='40px'/>
                </SearchBox>
                <Links>
                  <BText> Popular Searches : </BText>
                  <LText> Education </LText>
                  <LText> Fine Arts </LText>
                  <LText> History </LText>
                  <LText> Music </LText>
                </Links> 
            </Wrapper>
        </Container>
    </div>
  )
}

export default Hero

const BgVideo = styled.video`
height: 100%;
width: 100%;
position: absolute;
object-fit: cover;
` 

const Links = styled.div`
display: flex;
margin-top: 20px;
font-weight: 700;
font-size: 20px;
color: white
`
const BText = styled.div`
margin-right: 20px;
`
const LText = styled.div`
font-weight: 300;
margin-right: 20px;
text-decoration: underline;
`

const Icona = styled.div`
padding: 15px 20px;
border-radius: 50px;
font-weight: 500;
font-size: 18px;
margin-top: 80px;
margin-right: 10px;
background-color: transparent;
color: white;
display: flex;
align-items: center;
justify-content: center;

cursor: pointer;

:hover{
  background-color: white;
  color: black
}
:active{
  background-color: white;
}

`
const IconHOld = styled.div`
display: flex;
width: 90%;
overflow: hidden;
justify-content: space-around;
margin-bottom: 30px;

`

const Select = styled.select`
/* border-right: 1px solid black; */
width: 170px;
height: 100%;
border: none;
outline: none;
margin-left: 7px;
font-size: 15px;
margin-right: 7px;

`
const Dash = styled.div`
  width: 2px;
  height: 18px;
  background-color: gray;
`

const Input = styled.input`
outline: none;
border: none;
padding-left: 15px;

::placeholder{
  font-size: 15px;
}
`




const SearchBox = styled.div`
   width: 50%;
    height: 65px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    margin-top: 13px;
    overflow: hidden;
    align-items: center;
  
`

const Desc = styled.div`
text-align: center;
margin-top: 35px;
margin-bottom: 35px;
font-size: 20px;
line-height: 30px;
font-weight: 400;
color: silver;
width: 55%;
`

const Title = styled.div`
font-weight: 700;
font-size: 48px;
text-align: center;
width: 52%;
margin: 0;
color: white;
line-height: 60px;


`


const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
position: absolute;
bottom: 0px;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.8);
/* padding-bottom: 180px;*/

/* background-color: yellow; */
`

const Container = styled.div`
width: 100%;
/* margin-top: 10px;  */
height: 100vh;
display: flex;
background-repeat: no-repeat;
background-position: center;
background-size:cover;
position: relative;
`