import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import image1 from '../../assets/new-images/homepage-images/section-1-1.png'
import image2 from '../../assets/new-images/homepage-images/section-1-2.png'
import image3 from '../../assets/new-images/homepage-images/section-1-4.png'
import image4 from '../../assets/new-images/homepage-images/section-1-3.png'


const Section = styled.section`
display: flex;
align-items: center;
background-color: green;
justify-content: center;
  position: relative;
  overflow: hidden;
  height: calc(100vh - 4.5rem);
  width: 100vw;

  @media (max-width:800px){
    flex-direction: column-reverse;
    padding: 0;
  }

`

const ImagesWrapper = styled.div`
height: 100%;
position: relative;
width: 50%;
/* overflow: hidden; */
display: flex;
justify-content: center;
align-items: center;
@media (max-width:1100px){
    width:60%
  }
@media (max-width:800px){
    width:100%;
    height: 50%;
  }
`
const I1 = styled(motion.img)`
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  position: absolute;
  /* background-color: pink; */
 width: 50%;
height: 99%;
z-index: 5;
@media ( (min-width : 700px) and (min-height: 900px)) {
   height: 65%;
    }
    @media (max-width: 800px) {
      height: 97%;
    }
`
const I2 = styled(motion.img)`
position: absolute;
/* background-color: yellow; */
  right: 11%;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
height: 80%;
width: 50%;
z-index: 4;
@media ( (min-width : 700px) and (min-height: 900px)) {
height: 55%;
    }
    @media (max-width: 800px) {
      height: 90%;
    }
`
const I3 = styled(motion.img)`
height: 90vh;
width: 50vw;
position: absolute;
right:0;
top: 0;
z-index: 1;


`
const I4 = styled(motion.img)`
height: 98vh;
width: 30vw;
position: absolute;
left: 0;
bottom: 10%;
z-index: 1;
`

const TitleWrapper = styled(motion.div)`
padding-left: 2rem;
/* background-color: red; */
position: relative;
z-index: 6;
  overflow: hidden;
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
   align-items: center;
   gap: 2rem;
   @media (max-width:1000px){
   width: 40%;
  }

   @media (max-width:800px){
    width:90%;
    height: 50%;
    gap: 0.5rem;
    padding-left: 0;
    justify-content: flex-start;
  }
   
  h1 {
    font-family: Hauora, monospace;
  
    text-align: left;
    line-height: 1.4;
    text-shadow: 1px 1px 1px #fff;
    font-size: 3.5rem;
    user-select: none;
    @media ( (min-width : 600px) and (min-height: 900px)) {
     line-height: 1.6;
     font-size: 2.7rem !important;
    }
    @media (max-width: 1200px) {
      font-size: 2.5em;
    }

    @media (max-width: 1000px) {
      font-size: 2.4em;
    }
    @media (max-width: 800px) {
      text-align: center;
      font-size: 2.3em;
    }
    @media (max-width: 600px) {
      font-size: 2.1em;
    }
    @media (max-width: 500px) {
      font-size: 1.9em;
    }
    @media (max-width: 400px) {
      font-size: 1.7em;
    }
  }
  h2 {
    font-family: Hauora, monospace;
    text-align: left;
    line-height: 1.7;
    font-weight: 400;
    text-shadow: 1px 1px 1px #b0b0b0;
    font-size: 1.5em;
    text-transform: capitalize;
    user-select: none;
    color: #b0b0b0;
    width: 100%;

    @media ( (min-width : 600px) and (min-height: 900px)) {
     line-height: 1.9;
     font-size: 2rem !important;
    }

    @media (max-width: 1200px) {
      font-size: 1.8em;
    }

    @media (max-width: 1000px) {
      font-size: 1.6em;
    }
    @media (max-width: 800px) {
      text-align: center;
      font-size: 1.4em;
    }
    @media (max-width: 600px) {
      font-size: 1.3em;
    }
    @media (max-width: 500px) {
      font-size: 1.1em;
    }
    @media (max-width: 400px) {
      font-size: 1em;
    }
  }
  `



const Header = () => {  

  return (
    <Section>
    <TitleWrapper
      initial={{ opacity:0}}
      animate={{ opacity: 1}}
       transition={{duration:1.5,delay:1,type:'ease'}}
    >
      <h1>Discover, Connect & Share Your World on Tags Social.
</h1>
<h2>Embark on a journey of discovery, as Tags Social connects you with like-minded individuals at new locations. </h2>
    
      </TitleWrapper>
      <ImagesWrapper>
    <I1
  //  initial={{ left:'-150%'}}
  //  animate={{ left:'13%'}}
  //   transition={{duration:1.7}}
    src={image1} alt='hero-image'/>
    <I2
      //  initial={{right:'-50%' }}
      //  animate={{ right:'13%'}}
      //  transition={{duration:1.7}}
   
    src={image2} alt='hero-image'/>
    </ImagesWrapper>
    <I3
     initial={{ opacity:0}}
     animate={{ opacity: 1}}
      transition={{duration:1,delay:1.5,type:'ease'}} src={image3} alt='background-blur'/>
    <I4
     initial={{ opacity:0}}
     animate={{ opacity: 1}}
      transition={{duration:1,delay:1.5,type:'ease'}}
    src={image4} alt='background-blur'/>
    </Section>
  )
}

export default Header
