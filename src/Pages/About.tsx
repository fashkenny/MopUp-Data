import React from 'react'
import styled from 'styled-components'
import CardMain from '../Components/Static/CardMain'
import GlobalButton from '../Components/Static/GlobalButton'
import img1 from '../Assets/work (1).png'
import img2 from '../Assets/work (1).png'
import img3 from '../Assets/work (1).png'
import img4 from '../Assets/work (2).png'
import img5 from '../Assets/work (1).png'
import img6 from '../Assets/work (2).png'


const About = () => {

  const data = [
    {
      img: img1, text: 'Fash Jisg', fav: 10, view: '100k', label: 'PRO'
    },
    {
      img: img2, text: 'Segun Agba.', fav: 70, view: '15k', label: 'PRO'
    },
    {
      img: img3, text: 'O. Bakes', fav: 34, view: '15k', label: 'PRO'
    },
    {
      img: img4, text: 'Fash Taiwo', fav: 30, view: '12k', label: 'PRO'
    },
    {
      img: img5, text: 'Josh Akins', fav: 40, view: '11k', label: 'ELE'
    },
    {
      img: img6, text: 'John Kane', fav: 20, view: '15k', label: 'PRO'
    },
    // {
    //   img: img7, text: 'Josh Akins.', fav: 80, view: '15k', label: 'PRO'
    // },
    // {
    //   img: img3, text: 'Som Logic.', fav: 34, view: '15k', label: 'PRO'
    // },
    // {
    //   img: img4, text: 'Fash Taiwo', fav: 30, view: '12k', label: 'PRO'
    // },
    {
      img: img4, text: 'Austin Kane', fav: 30, view: '12k', label: 'PRO'
    },
    {
      img: img5, text: 'Jack Ma', fav: 40, view: '11k', label: 'ELE'
    },
    {
      img: img1, text: 'Peter Oti', fav: 20, view: '15k', label: 'PRO'
    },
    {
      img: img2, text: 'Ehiabhi P.', fav: 80, view: '15k', label: 'PRO'
    },
    // {
    //   img: img7, text: 'Williams Skye.', fav: 34, view: '15k', label: 'PRO'
    // },
    {
      img: img6, text: 'Tom Cruise', fav: 30, view: '12k', label: 'PRO'
    },
    {
      img: img5, text: 'Json Nick', fav: 40, view: '11k', label: 'ELE'
    },
  ]

  return (
    <div>
      <Container>
        <Main>
          <UpPart>
            <Left>
              <BigText> Popular books in Bookpress </BigText>
              <SmTExt>You might be surprised at how many books refer to other works in their titles.The Fault in Our Stars by John Green comes from Shakespeare’s Julius Caesar, and Steinbeck’s Of Mice and Men takes its inspiration from a Robert Burns poem.</SmTExt>
            </Left>
            <Right>
            <GlobalButton bcc='#0275D8' width='160px' height='40px' text='Browse All Books'/>
            </Right>
          </UpPart>
          <CardHolder>
            {data.map((el)=>{
              return(
                <CardMain bigImg={el.img} text={el.text} fav={el.fav} views={el.view} label={el.label}/>
              )

            })}
          </CardHolder>
          
          
        </Main>
      </Container>
    </div>
  )
}

const CardHolder = styled.div`
display: flex;
width: 100%;
justify-content: space-between;

/* background-color: pink; */
margin-top: 10px;
flex-wrap: wrap;
` 

const Container = styled.div`
min-height: 400px;
width: 100%;
display: flex;
padding-top: 30px;
align-items: center;
flex-direction: column;
`

const Main = styled.div`
width: 90%;
`
const Left = styled.div``
const UpPart = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
`
const Right = styled.div``
const SmTExt = styled.div`
width: 70%;
`
const BigText = styled.div`
font-size: 40px;
font-weight: 700;
margin-bottom: 15px;
`


export default About