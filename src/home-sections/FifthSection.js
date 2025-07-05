import {motion} from 'framer-motion'
import styled from 'styled-components'
import image6 from '../assets/new-images/homepage-images/section-1-4.png'
import image1 from '../assets/new-images/homepage-images/Frame 457.png'
import image7 from '../assets/new-images/homepage-images/section-1-3.png'

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #181818;
  overflow: hidden;
  display: grid;
  place-items: center;
  @media (max-width: 800px) {
    margin-top: 0rem;
    align-items: start;
  }
  
  /* @media((max-width:800px) and (min-height:600px)){
  min-height:90vh;
  } */
  @media((max-width:800px) and (min-height:700px)){
  min-height: 75vh;
  }
  @media((max-width:800px) and (min-height:900px)){
  min-height: 75vh;
  
  }
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
justify-items:center;
grid-template-columns: 1fr;
grid-template-rows: 5rem auto;
align-items: start;
width: 100%;
gap: 1rem;
/* background-color: pink; */
/* @media ( (max-width : 1025px) and (min-height: 900px)) {
  grid-template-columns: 1fr;
    } */
@media (max-width:800px){
  height:28rem;
}
.image-wrapper{
  position: relative;
  width: 100%;
  height: 50rem;
  display: grid;
  place-items: center;
  /* @media ( (max-width : 1025px) and (min-height: 900px)) {
    height: 60vh;
   width: 96%;
    } */
  @media (max-width:800px){
   height: 28rem;
   width: 96%;
}
}
`
const I1 = styled(motion.img)`
  width: 80%;
  height: 100%;
  border-radius: 1.5rem;
  position: absolute;
  object-fit: contain;
  /* filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5)); */
  z-index: 5;
  user-select: none;
@media (max-width:800px){
   height: 95%;
   width: 95%;
}
`

const TextContainer = styled(motion.div)`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  z-index: 2;
  /* @media ( (max-width : 1025px) and (min-height: 900px)) {
    padding: 1rem;
    height: 40vh;
   justify-content: center;
   width: 80%;
    } */
  @media (max-width:800px){
   height: 6rem;
   justify-content: center;
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
  font-size: 4rem;/* Adjust the font size based on viewport width */
  z-index: 5;
  text-transform: capitalize;
  color: #fff;
  text-align: center;
  font-family: Hauora, monospace !important;

  /* @media ( (max-width : 1024px) and (min-height: 900px)) {
    text-align: center !important;
   font-size: 1.9rem !important;
  } */
  @media (max-width: 1200px) {
    font-size: 2.7em;
  }

  @media (max-width: 1000px) {
    font-size: 2.6em;
  }
  @media (max-width: 750px) {
    font-size: 2.4em;
    text-align: center !important;
    
  }
  @media (max-width: 600px) {
    font-size: 2.3em;

  }
  @media (max-width: 500px) {
    font-size: 2.3em;
  }
  @media (max-width: 400px) {
    font-size: 2.3rem;
  } /* Adjust font size for even smaller screens */
  
`


const Button = styled.button`
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #fff;
  outline: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  background: linear-gradient(
    135deg,
    rgba(0, 126, 242, 1),
    rgba(0, 58, 108, 1)
  );
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #000;
    color: #fff;
  }

@media (max-width:800px){
  font-size: 1.2rem;
}
`
const ThirdSection = () => {
  
  

  return (
  
      <Section >
        <Wrapper>
         {/* <I3
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
      />  */}
       <TextContainer
           initial = {{opacity:0}}
           whileInView={{opacity:1}}
           viewport={{ once: true }}
           transition={{duration:1,delay:1}}
        >
          <Title>Introducing TagSocial

          </Title>
        </TextContainer>
        <div className='image-wrapper'>
        <I1 src = {image1}
        initial = {{top:'-80%'}}
        whileInView={{top:"0%"}}
        viewport={{ once: true }}
        transition={{duration:1.5}}
        />
        </div>
       <Button onClick={()=>window.location.href = '/features'}>Explore Tagsocial</Button>
        </Wrapper>
      </Section>
     
  )
}

export default ThirdSection
