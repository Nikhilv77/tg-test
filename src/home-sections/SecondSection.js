import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import image1 from '../assets/new-images/homepage-images/section-3-1.png'
import image2 from '../assets/new-images/homepage-images/section-3-2.png'
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
  height: 94vh;

  width: 33vw;
  position: absolute;
  /* background-color: green; */
  right: -8%;
  top: -1.5%;
  z-index: 3;
  @media ((min-width : 601px) and (min-height: 900px)) {
    height: 70vh !important;
    width: 40vh !important;
    }
  @media (max-width:1200px){
    height: 82vh;
    right: -3%;
width: 35vw;
  }
  @media (max-width:1000px){
    height: 79vh;
    right: 0;
width: 41vw;
  }
  @media (max-width:800px){
    height: 75vh;
    right: 0;
width: 46vw;
  }
  @media (max-width:700px){
    height: 72vh;
    right: 0;
width: 50vw;
  }
  @media (max-width: 600px) {
      top: 35%;
      left: 65%;
transform: translate(-50%,-50%);
      width: 15rem;
      height: 50vh;
    }
 
`
const I2 = styled.img`
  height: 47vh;
  width: 45vw;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  /* background-color: blue; */
  position: absolute;
  right: 10%;
  top: 40%;
  z-index: 2;
  @media ((min-width : 601px) and (min-height: 900px)) {
    height: 29vh !important;
    width: 42vh !important;
    top: 50%;
    }

  @media (max-width:1200px){
    height: 42vh;
    right: 8%;
width: 47vw;
  }
  @media (max-width:1000px){
    height: 39vh;
    right: 5%;
width: 50vw;
  }
  @media (max-width:800px){
    height: 36vh;
    right: 4%;
width: 51vw;
  }
  @media (max-width:700px){
    height: 35vh;
    right: 2;
width: 54vw;
  }
  @media (max-width: 600px) {
      top: 35%;
      left: 35%;
transform: translate(-50%,-50%);
      width: 15rem;
      height: 20vh;
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
  left: 4%;
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
    row-gap: 3.5rem;
    width: 45%;
    top: 9%;
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

    text-align: left;
    line-height: 1.4;
    z-index: 10;
    text-shadow: 1px 1px 1px #fff;
    font-size: 3.4rem;
    user-select: none;
    @media ((min-width: 601px) and (min-height: 900px)) {
      line-height: 1.6;
      font-size: 3rem !important;
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
    width: 90%;
    align-self: flex-start;

    @media ((min-width: 601px) and (min-height: 900px)) {
      line-height: 1.9;
      font-size: 1.7rem !important;
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

const Header = () => {
  return (
    <Section>
      <Wrapper>
        <Title>
          <h1>Elevate Your Social Experience</h1>
          <h2>
            TagSocial is not just an app; it's a transformative social
            experience. Imagine leaving your mark on the world by connecting
            with people and places around you.
          </h2>
        </Title>

       <I1 src={image1} alt='hero-image'/>
        <I2 src={image2} alt="hero-image" />
        <I3 src={image3} alt="background-blur" />
        <I4 src={image4} alt="background-blur" />
      </Wrapper>
    </Section>
  )
}

export default Header
