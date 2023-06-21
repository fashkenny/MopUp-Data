import React from 'react'
import styled from 'styled-components'
import logo from "../../Assets/logo.png"
import {GoSearch} from "react-icons/go"
import {BsCart} from "react-icons/bs"
import {FaAngleDown} from "react-icons/fa"
import GlobalButton from '../Static/GlobalButton'


const Header = () => {
    const [show,setShow] = React.useState<boolean>(false)
  return (
    <div>
        <Container>
       <Main>
       <Logo>
        <Pic src={logo}/>
</Logo>
<NavHolder>
    <Nav>Home</Nav>
    <Nav>About</Nav>
    <Nav1
    >Books Store
        <Drop>
            <FaAngleDown/>
        </Drop>
    </Nav1>
    <Nav>Blogs</Nav>
    <Nav>Contact</Nav>
</NavHolder>


<IconHolder>
    <Icon>
        <GoSearch/>
    </Icon>
    <Icon>
        <BsCart/>
    </Icon>
   <GlobalButton bcc='#0275D8' width='130px' height='40px' text='Upload Button'/>
</IconHolder>

  {
    show ? <HoverCard>
    <Navs>All Books</Navs>
    <Navs>Single Books</Navs>
    <Navs> My Account</Navs>
    <Navs>Checkout</Navs>
</HoverCard> :null
  }

       </Main>
        </Container>
    </div>
  )
}

export default Header

const Navs = styled.nav`
color: white;
cursor: pointer;
`

const HoverCard = styled.div`
background-color: blue;
position: absolute;
top: 50px;
right: 650px;
`

const Drop = styled.div`
margin-top: 7px;
padding-left: 2px;
`


const Icon = styled.div`
margin:0 10px;
margin-right: 20px;
color: #025AA5;
font-size: 20px;
`

const IconHolder = styled.div`
display: flex;
/* background-color: orangered; */
align-items: center;
justify-content: center;
`

const Nav1 = styled.nav`
margin: 20px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

`
const Nav = styled.nav`
margin: 20px;
cursor: pointer;
`

const NavHolder = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;

`

const Pic = styled.img`
width:200px;
`

const Logo = styled.div`
/* background-color: purple; */
display: flex;
align-items: center;
justify-content: center;

`

const Main = styled.div`
width: 90%;
/* background-color: red; */
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`

const Container = styled.div`
position: fixed;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
z-index: 4;
background-color: #FFFFFF;
height: 70px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`