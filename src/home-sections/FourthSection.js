import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import image1 from '../assets/new-images/homepage-images/section-5-1.png'

import image3 from '../assets/new-images/homepage-images/section-1-4.png'
import image4 from '../assets/new-images/homepage-images/section-1-3.png'

const Section = styled.section`
  position: relative;
  background-color: rgba(24,24,24,0.5);
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`

const Wrapper = styled.div`
  margin-top: 11vh;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`
const I1 = styled.img`
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.9));
  height: 86vh;

  width: 42vw;
  position: absolute;
  /* background-color: green; */
  left: 7%;
  top: 0;
  z-index: 3;
  @media ((min-width : 601px) and (min-height: 900px)) {
    height: 62vh !important;
    width: 43vh !important;
    }
  @media (max-width:1200px){
    height: 74vh;
    
  }
  @media (max-width:1000px){
    height: 73vh;
    width: 45vw;
  }
  @media (max-width:800px){
    height: 72vh;
    
  }
  @media (max-width:750px){
    height: 71vh;
    width: 47vw;
  }
  @media (max-width: 600px) {
      top: 32%;
      left: 50%;
transform: translate(-50%,-50%);
      width: 19rem;
      height: 50vh;
    }
 
`

const I3 = styled.img`
  height: 90vh;

  width: 50vw;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`
const I4 = styled.img`
  height: 98vh;

  width: 30vw;
  position: absolute;
  left: 0;
  bottom: 10%;
  z-index: 1;
`

const Title = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 4%;
  overflow: hidden;
  height: 100%;
  padding: 1rem;
  width: 45%;
  z-index: 5;
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 2rem;
  @media ((min-width: 601px) and (min-height: 900px)) {
     width: 40% !important;
    right: -2% !important;
    top: 9% !important;

  }
  @media(max-width:1000px){
    right: 1%;
  }
  @media(max-width:750px){
    right: -1%;
  }
  @media (max-width: 600px) {
    justify-content: space-between;

    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;

    height: 84%;
  }

  h1 {
    font-family: Hauora, monospace;
  align-self: flex-start;
    text-align: left;
    line-height: 1.4;
    z-index: 10;
    text-shadow: 1px 1px 1px #fff;
    font-size: 3.4rem;
    user-select: none;
    @media ((min-width: 601px) and (min-height: 900px)) {
      line-height: 1.6;
      font-size: 2.8rem !important;
      align-self: flex-end;
    }
    @media (max-width: 1200px) {
      font-size: 2.5em;
    }

    @media (max-width: 1000px) {
      font-size: 2.4em;
    }
    @media (max-width: 800px) {
      font-size: 2.3em;
    }
    @media (max-width: 600px) {
      font-size: 2em;
      align-self: center;
      text-align: center;
    }
    @media (max-width: 500px) {
      font-size: 1.8em;
    }
    @media (max-width: 400px) {
      font-size: 1.6em;
    }
  }
  h2 {
    font-family: Hauora, monospace;
    text-align: left;
    line-height: 1.7;
    font-weight: 400;
    text-shadow: 1px 1px 1px #b0b0b0;
    font-size: 1.7rem;
    text-transform: capitalize;
    user-select: none;
    color: #b0b0b0;
    z-index: 10;
    width: 100%;
    align-self: flex-start;

    @media ((min-width: 601px) and (min-height: 900px)) {
      line-height: 1.8;
      font-size: 1.6rem !important;
      align-self: flex-end;
    }

    @media (max-width: 1200px) {
      font-size: 1.6em;
    }

    @media (max-width: 1000px) {
      font-size: 1.4em;
    }
    @media (max-width: 800px) {
      font-size: 1.2em;
    }
    @media (max-width: 600px) {
      font-size: 1em;
      text-align: center;
    }
    @media (max-width: 500px) {
      font-size: 1em;
    }
    @media (max-width: 400px) {
      font-size: 1em;
    }
  }
`

const ThirdSection = () => {
  return (
    <Section>
      <Wrapper>
        <Title>
          <h1>Why wait Download now</h1>
          <h2>
          TagSocial is not just an app; it's a transformative social experience. Imagine leaving your mark on the world by connecting with people and places around you.
          </h2>
        </Title>
       <I1 src={image1} alt='hero-image'/>
        <I3 src={image3} alt="background-blur" />
        <I4 src={image4} alt="background-blur" />
      </Wrapper>
    </Section>
  )
}

export default ThirdSection
