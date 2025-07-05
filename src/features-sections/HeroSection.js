import {motion} from 'framer-motion'
import styled from 'styled-components'
import image1 from '../assets/new-images/homepage-images/section-6-1.png'

const Section = styled.section`
  width: 100vw;
  min-height: 35vh;
  position: relative;
  z-index: 1;
  background-color: #181818;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  padding-left: 1rem;

`

const TextContainer = styled(motion.div)`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;


  /* @media (max-width: 1200px) {
    width: 55%;
  }

  @media (max-width: 1000px) {
    width: 60%;
  } */
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 800px) {
    width: 100%;
  }

  /* @media (max-width:800px){
    justify-content: space-between;
    width: 75%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  } */
`

const Title = styled.h1`
  font-size: 4.3rem;/* Adjust the font size based on viewport width */
  z-index: 5;
  text-transform: capitalize;
  color: #fff;
  font-family: Hauora, monospace !important;
 

  @media (max-width: 1200px) {
    font-size: 3.2em;
  }

  @media (max-width: 1000px) {
    font-size: 2.8rem;
    text-align: center;
  }
  @media (max-width: 800px) {
    font-size: 2.6em;
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 2.5em;

  }
  @media (max-width: 500px) {
    font-size: 2.4rem;
  }
   @media (max-width: 400px) {
    font-size: 2.3rem;
  }
`




const HeroSection = () => {
  
  return (
  
      <Section >
      
        <TextContainer
           initial = {{opacity:0}}
           animate={{opacity:1}}
           transition={{duration:1,delay:1}}
        >
          <Title>Features <br />
that set you apart
<br />on TagSocial</Title>
        </TextContainer>
      </Section>
     
  )
}

export default HeroSection
