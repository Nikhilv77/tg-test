import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Image2 from '../assets/images/homepage-images/second-section-2.png'

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background-color: var(--white);
  background-color: rgba(24,24,24,0.4);
  overflow: hidden;
`

const I2 = styled(motion.img)`
  position: absolute;
  top: 10%;

  width: 60%;
  height: 80vh;
  object-fit: contain;
  z-index: 2;
  @media screen and (max-width: 30em) {
    height: 60vh;
    top: 10%;
  }
`

const TitleContainer = styled(motion.div)`
  width: 45%;
  height: 100%;
  padding: 0.3rem;
  gap: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  position: absolute;
  top: 25%;
  right: 0;

  @media screen and (max-width: 768px) {
    top: 40%;
    width: 50%;
    right: 5%;
  }
  @media screen and (max-width: 640px) {
    width: 60%;
  }
  @media screen and (max-width: 480px) {
    top: 34%;
    width: 70%;
  }
`

const Title = styled.h1`
  font-size: 3.6rem;
  background-color: yellow;
  line-height: 1.4;
  font-family: Hauora, monospace;
  z-index: 5;
  color: #fff;
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 2px 2px 0px #333, 3px 3px 0px #333, 3px 3px 0px #333,
    4px 4px 0px #333, 4px 4px 0px #333, 5px 5px 0px #333;
  text-transform: capitalize;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.2));

  @media screen and (max-width: 768px) {
    font-size: 2.3rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 2.1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`
const SubTitle = styled.p`
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333, 2px 2px 0px #333,
    2px 2px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333;
  z-index: 999;
  font-size: 2.1rem;
  color: #989898;
  font-weight: 500;
  font-family: Hauora, monospace !important;
  z-index: 5;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`
const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Hauora, monospace;
  font-weight: 600;
  z-index: 999;
  padding: 0.8rem 2rem 0.8rem 2rem;
  font-size: 1.7rem;
  border: none;
  background: linear-gradient(
    135deg,
    rgba(0, 126, 242, 1),
    rgba(0, 58, 108, 1)
  ) !important;
  color: #fff;
  border-radius: 0.3rem;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
  align-self: center;
  margin: 1.5rem 0 0 0;

  &:hover {
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #007fff;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`

const FirstSection = () => {
 
  return (
    
      <Section >
  
        <I2  src={Image2}
        initial = {{left:'-50%'}}
        whileInView = {{left:'2%'}}
        transition={{duration:1.5}}
        />
        <TitleContainer >
          <Title>Give Some Life To Your Social Experience</Title>
          <SubTitle>
            <span
              style={{
                filter: ' drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.2))',
              }}
            >
              Explore TagSocial's exciting features and dive into a world of
              possibilities
            </span>
            <Button>Checkout</Button>
          </SubTitle>
        </TitleContainer>
      </Section>

  )
}

export default FirstSection
