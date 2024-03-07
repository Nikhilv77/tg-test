import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import image1 from '../assets/new-images/homepage-images/section-1-1.png'
import image2 from '../assets/new-images/homepage-images/section-1-2.png'
import image3 from '../assets/new-images/homepage-images/section-1-4.png'
import image4 from '../assets/new-images/homepage-images/section-1-3.png'

const HeaderSection = styled.section`
  position: relative;
  background-color: #181818;
  overflow: hidden;
  min-height: 93vh;
  overflow-y: scroll;
  width: 100vw;
` 
const I1 = styled(motion.img)`
  position: absolute;
  height: 42rem;
  width: 24rem;
  object-fit: contain;
  z-index: 4;
  @media (max-width:750px) {
    height: 23rem;
    width: 11rem;
  }
`
const I2 = styled(motion.img)`
  position: absolute;
  height: 34rem;
  width: 23rem;
  object-fit: contain;
  z-index: 3;
  @media (max-width:750px) {
    height: 20rem;
    width: 12rem;
  }
`

const I3 = styled(motion.img)`

  height: 80vh;
  width: 30vw;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  @media (max-width:1100px){
    height: 40vh;
width: 40vw;
top: 5%;
  }
  @media (max-width :750px){
height: 35vh;
width: 35vw;
top: 5%;
  }
`
const I4 = styled(motion.img)`
  height: 84vh;
  width: 20vw;
  position: absolute;
  left: 0;
  bottom: 10%;
  z-index: 1;
  @media (max-width:1100px){
    height: 75vh;
width: 25vw;
  }
  @media (max-width :750px){
height: 55vh;
width: 30vw;

  }
`
const ImageContainer = styled.div`
  height: 100%;
  width: 48%;
  z-index: 3;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width:750px) {
    height: 44.5%;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    /* background-color: blue; */
  }
`
const Title = styled(motion.div)`
  
  padding-left: 3rem;
  overflow: hidden;
  position: absolute;
  height: 100%;
  width: 50%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (max-width:750px) {
    justify-content: flex-start;
   padding-left: 0;
    height: 55%;
    width: 100%;
    /* background-color: green; */
    bottom: 0;
    left: 49%;
    transform: translateX(-50%);
    gap: 1rem;
  }

  h1 {
    font-family: Hauora, monospace;
    text-align: start;
    line-height: 1.3;
    color: #fff;
    font-size: 3.5em;
    width: 90%;
    user-select: none;
    @media (max-width: 1024px) and (min-height:900px) {
      font-size: 2em!important;
      text-align: center !important;
    
    }
    @media (max-width: 750px) {
      font-size: 2em;
      width: 95%;
      text-align: center !important;
    }
    @media (max-width: 600px) {
      font-size: 1.9em;
    }
    @media (max-width: 500px) {
      font-size: 1.8em;
    }
    @media (max-width: 400px) {
      font-size: 1.7em;
    }
  }

  h2 {
    font-family: Hauora, monospace;
    text-align: start;
    font-weight: 400;
    font-size: 1.7em;
    text-transform: capitalize;
    color: #b0b0b0;

    width: 90%;
    @media (max-width: 1024px) and (min-height:900px) {
      font-size: 1.3em;
      text-align: center !important;
      width: 90% !important;
    }
    @media (max-width: 750px) {
      font-size: 1.3em;
      text-align: center !important;
      width: 98%;
    }
    @media (max-width: 600px) {
      font-size: 1.2em;
    }
    @media (max-width: 500px) {
      font-size: 1.1em;
    }
    @media (max-width: 400px) {
      font-size: 1em;
    }
  }
`

const HeroSection = () => {
  return (
    <HeaderSection>
      <ImageContainer>
        <I1
          initial={{
         left:'-150%',scale:0.3
          }}
          animate={{
            opacity: 1,left:'15%',scale:1
          }}
          transition={{
            delay: 1,
            duration: 1.4,
          }}
          src={image1}
        />
        <I2
          initial={{
         right:'-40%',scale:0.3
          }}
          animate={{
            opacity: 1,right:'15%',scale:1
          }}
          transition={{
            delay: 1,
            duration: 1.4,
          }}
          src={image2}
        />
      </ImageContainer>
      <I3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, type: 'ease' }}
        src={image3}
        alt="background-blur"
      />
      <I4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, type: 'ease' }}
        src={image4}
        alt="background-blur"
      />
      <Title
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
          duration: 1.4,
          
        }}
      >
        <motion.h1>
          Discover, Connect & Share Your World on Tags Social
        </motion.h1>

        <motion.h2>
          Embark on a journey of discovery, as Tags Social connects you with
          like-minded individuals at new locations
        </motion.h2>
      </Title>
    </HeaderSection>
  )
}

export default HeroSection
