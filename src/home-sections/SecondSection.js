import {motion} from 'framer-motion'
import styled from 'styled-components'
import image1 from '../assets/new-images/homepage-images/section-3-1.png'

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background-color: rgba(24,24,24,0.5);
  overflow: hidden;
`
const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
place-items: center;
height: 100%;
width: 100%;
/* background-color: pink; */
@media ( (max-width : 1025px) and (min-height: 900px)) {
  grid-template-columns: 1fr;
    }
@media (max-width:800px){
  grid-template-columns:1fr;
}
.image-wrapper{
  position: relative;
  width: 100%;
  height: 97vh;
  /* background-color: green; */
  @media ( (max-width : 1025px) and (min-height: 900px)) {
    height: 60vh;
   width: 96%;
    }
  @media (max-width:800px){
   height: 55vh;
   width: 96%;
}
}
`
const I1 = styled(motion.img)`
  width: 100%;
  height: 97%;
  position: absolute;
  object-fit: contain;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;

`

const TextContainer = styled(motion.div)`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media ( (max-width : 1025px) and (min-height: 900px)) {
    padding: 1rem;
    height: 40vh;
   justify-content: flex-start;
   width: 60%;
    }
  @media (max-width:800px){
   height: 45vh;
   justify-content: flex-start;
   width: 88%;
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
  font-size: 3.4rem;/* Adjust the font size based on viewport width */
  z-index: 5;
  text-transform: capitalize;
 
  font-family: Hauora, monospace !important;


  @media (max-width: 1200px) {
    font-size: 2.4em;
  }

  @media (max-width: 1000px) {
    font-size: 2.3em;
  }
  @media (max-width: 750px) {
    font-size: 2.2em;
text-align: center;
    
  }
  @media (max-width: 600px) {
    font-size: 2em;

  }
  @media (max-width: 500px) {
    font-size: 1.8em;
  }
  @media (max-width: 400px) {
    font-size: 1.6em;
  } /* Adjust font size for even smaller screens */
  
`
const Text = styled.p`
  /* text-align: justify; */
  font-family: Hauora, monospace !important;
  font-size: 1.6rem;
  line-height: 1.8;
  z-index: 5;
  text-transform: capitalize;
  text-transform: 0 0 4px #fff;

  color: #b0b0b0;
  font-family: Hauora, monospace !important;
  @media ( (max-width : 1024px) and (min-height: 900px)) {
   line-height: 1.5;
   width: 70% !important;
   font-size: 1.6em !important;
  }

  @media (max-width: 1200px) {
    font-size: 1.6em;
  }

  @media (max-width: 1000px) {
    font-size: 1.4em;
  }
  @media (max-width: 750px) {
    font-size: 1.3em;
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 1.1em;

  }
  @media (max-width: 500px) {
    font-size: 1em;
  }
  @media (max-width: 400px) {
    font-size: 1em;
  }
`



const FourthSection = () => {
  
  

  return (
  
      <Section >
        <Wrapper>
          <div className='image-wrapper'>
        <I1 src={image1}
        initial = {{left:'-90%'}}
        whileInView={{left:0}}
        transition={{duration:1}}
        />
        </div>
        <TextContainer
           initial = {{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:1,delay:1}}
        >
          <Title>Elevate Your Social Experience</Title>
          <Text>
          TagSocial is a transformative social experience. Imagine leaving your mark on the world by connecting with people and places around you
          </Text>
        </TextContainer>
        </Wrapper>
      </Section>
     
  )
}

export default FourthSection






