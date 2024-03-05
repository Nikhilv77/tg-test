import {motion} from 'framer-motion'
import styled from 'styled-components'
import image1 from '../assets/new-images/homepage-images/section-5-1.png'

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
   height: 60vh;
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
   height: 40vh;
   justify-content: flex-start;
   width: 83%;
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
  font-size: calc(
    3.1em + 1vw
  ); /* Adjust the font size based on viewport width */
  z-index: 5;
  text-transform: capitalize;
 
  font-family: Hauora, monospace !important;


  @media screen and (max-width: 1120px) {
    /* Adjust font size for smaller screens */
    font-size: calc(2.4em + 1vw);
  }
  @media screen and (max-width: 625px) {
    font-size: calc(
      1.8em + 1vw
    ); /* Adjust font size for even smaller screens */
  }
`
const Text = styled.p`
  /* text-align: justify; */
  font-family: Hauora, monospace !important;
  font-size: calc(1.1em + 1vw);
  line-height: 1.8;
  z-index: 5;
  text-transform: capitalize;
  text-transform: 0 0 4px #fff;

  color: #b0b0b0;
  font-family: Hauora, monospace !important;

  @media screen and (max-width: 1120px) {
    font-size: calc(1.2em + 1vw);
  }
  @media screen and (max-width: 625px) {
    font-size: calc(1.1em + 1vw);
  }
`



const FourthSection = () => {
  
  

  return (
  
      <Section >
        <Wrapper>
          <div className='image-wrapper'>
        <I1 src={image1}
        initial = {{bottom:'-90%'}}
        whileInView={{bottom:0}}
        transition={{duration:1}}
        />
        </div>
        <TextContainer
           initial = {{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:1,delay:1}}
        >
          <Title> Next Level of Social Networking</Title>
          <Text>
            Unleash your creativity, express yourself, and make meaningful
            connections effortlessly.
          </Text>
        </TextContainer>
        </Wrapper>
      </Section>
     
  )
}

export default FourthSection
