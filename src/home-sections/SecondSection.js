import {motion} from 'framer-motion'
import styled from 'styled-components'
import image6 from '../assets/new-images/homepage-images/section-1-4.png'
import image1 from '../assets/new-images/featurespage-images/section-3-1.png'
import image7 from '../assets/new-images/homepage-images/section-1-3.png'

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #000000;
  overflow: hidden;
  display: grid;
  
  place-items: center;
  @media (max-width: 800px) {
    margin-top: 2rem;
    align-items: start;
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
  height: 60%;
  border-radius: 1.5rem;
  position: absolute;
  object-fit: cover;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 5;
  user-select: none;
/* top: 50%; */
/* transform: translateY(-50%,-50%); */
@media (max-width:800px){
   height: 80%;
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
   height: 11rem;
   justify-content: center;
   width: 89%;
  
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
  color: #fff;
  font-family: Hauora, monospace !important;
  .hero-span{
color: rgba(0, 121, 253, 1) !important;
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
    font-size: 1.8em;
  }
  @media (max-width: 400px) {
    font-size: 1.6em;
  } /* Adjust font size for even smaller screens */
  
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
      /> */}
       <TextContainer
           initial = {{opacity:0}}
           whileInView={{opacity:1}}
           viewport={{ once: true }}
           transition={{duration:1,delay:1}}
        >
          <Title>We all have them: <span className ='hero-span'>camera roll regrets.</span> 📸 Photos you love, but just aren't 'Insta-worthy. 🙈💡 

          </Title>
        </TextContainer>
      
        <div className='image-wrapper'>
        <I1 src = "https://firebasestorage.googleapis.com/v0/b/tagsocial-66835.appspot.com/o/website%2Fgipy2.gif?alt=media&token=f41e3824-76a9-4da2-bcc9-d95e5eef68fa"
        initial = {{left:'-80%'}}
        whileInView={{left:"10%"}}
        viewport={{ once: true }}
        transition={{duration:1.5}}
        />
        </div>
       
        </Wrapper>
      </Section>
     
  )
}

export default ThirdSection
