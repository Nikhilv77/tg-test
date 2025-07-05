import {motion} from 'framer-motion'
import styled from 'styled-components'
import image6 from '../assets/new-images/homepage-images/section-1-4.png'
import image1 from '../assets/new-images/featurespage-images/Frame 447.png'
import image7 from '../assets/new-images/homepage-images/section-1-3.png'
import Line1 from '../assets/new-images/featurespage-images/Line 1.png'
import number1 from '../assets/new-images/featurespage-images/Group 6969.png'

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #181818;
  overflow: hidden;
  display: grid;
  padding-left: 5rem;
  place-items: center;
  @media (max-width: 800px) {
    margin-top: 2rem;
    align-items: start;
    padding-left: 0;
  }
  
  @media((max-width:800px) and (min-height:600px)){
  min-height: 80vh;
  }
  @media((max-width:800px) and (min-height:700px)){
  min-height: 75vh;
  }
  @media((max-width:800px) and (min-height:900px)){
  min-height: 60vh;
  }
  
`
const Line = styled.img`
position: absolute;
left: 5%;
bottom: 0;
height: 70%;
z-index: 500;
filter: brightness(200%);
`
const Number = styled.img`
position: absolute;
left: 3%;
top: 50%;
height: 4rem;
width: 4rem;
z-index: 500;
`

const I3 = styled(motion.img)`

  opacity: 0.6 !important;
  height: 70vh;
  width: 30vw;
  position: absolute;
  right: 0;
  top: 5%;
  z-index: 1;
  @media (max-width:1100px){
    height: 40vh;
width: 30vw;
top: 15%;
  }
  @media (max-width :750px){
height: 35vh;
width: 30vw;
top: 15%;
  }
`
const I4 = styled(motion.img)`
  height: 84vh;
  width: 25vw;
  position: absolute;
  left: 0;
  bottom: 30%;
  z-index: 1;
  @media (max-width:1100px){
    height: 75vh;
width: 25vw;
  }
  @media (max-width :750px){
height: 55vh;
width: 23vw;

  }
`
const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-items:center;
align-items: start;
height: 100%;
width: 100%;
/* background-color: pink; */
/* @media ( (max-width : 1025px) and (min-height: 900px)) {
  grid-template-columns: 1fr;
    } */
@media (max-width:800px){
  grid-template-columns:1fr;
  height: 30rem;
  .image-wrapper{
    order: 2;
  }
}
.image-wrapper{
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  /* @media ( (max-width : 1025px) and (min-height: 900px)) {
    height: 60vh;
   width: 96%;
    } */
  @media (max-width:800px){
   height: 20rem;
   width: 96%;
}
}
`
const I1 = styled(motion.img)`
  width: 80%;
  height: 80%;
  border-radius: 1.5rem;
  position: absolute;
  object-fit: contain;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;
/* top: 50%; */
/* transform: translateY(-50%,-50%); */
@media (max-width:800px){
   height: 95%;
}
`

const TextContainer = styled(motion.div)`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
z-index: 2;
  gap: 1rem;
  /* @media ( (max-width : 1025px) and (min-height: 900px)) {
    padding: 1rem;
    height: 40vh;
   justify-content: center;
   width: 80%;
    } */
  @media (max-width:800px){
   height: 13rem;
   justify-content: center;
   width: 89%;
}
@media(max-width:420px){
  width: 96%;
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
  font-size: 3rem;/* Adjust the font size based on viewport width */
  z-index: 5;
  text-transform: capitalize;
  color: #fff;
  font-family: Hauora, monospace !important;
  .hero-span{
color: rgba(0, 121, 253, 1);
}
  /* @media ( (max-width : 1024px) and (min-height: 900px)) {
    text-align: center !important;
   font-size: 1.9rem !important;
  } */
  @media (max-width: 1200px) {
    font-size: 2.4em;
  }

  @media (max-width: 1000px) {
    font-size: 2.3em;
  }
  @media (max-width: 750px) {
    font-size: 2.1em;
    text-align: center !important;
    
  }
  @media (max-width: 600px) {
    font-size: 2em;

  }
  @media (max-width: 500px) {
    font-size: 1.6em;
  }
  @media (max-width: 400px) {
    font-size: 1.4em;
  } /* Adjust font size for even smaller screens */
  
`



const ThirdSection = () => {
  
  

  return (
  
      <Section >
        {/* <Line src={Line1} alt="line"/>
        <Number src={number1} alt="number"/> */}
        <Wrapper>
        <I3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, type: 'ease' }}
        src={image6}
        alt="background-blur"
      />
      <I4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, type: 'ease' }}
        src={image7}
        alt="background-blur"
      />
     
      
        <div className='image-wrapper'>
        <I1 src = {image1}
        initial = {{left:'-70%'}}
        whileInView={{left:"10%"}}
        viewport={{ once: true }}
        transition={{duration:1.5}}
        />
        </div>
        <TextContainer
           initial = {{opacity:0}}
           whileInView={{opacity:1}}
           viewport={{ once: true }}
           transition={{duration:1,delay:1}}
        >
          <Title>Get ready to <span className='hero-span'>customize your vibe</span> with TagBadges on TagSocial. Express yourself like never before! 🌟✨
          </Title>
        </TextContainer>
        </Wrapper>
      </Section>
     
  )
}

export default ThirdSection

//Ditch the creepy algorithms! 🛑 We don't track you or your data. 🔒







