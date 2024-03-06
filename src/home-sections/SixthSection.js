import React from 'react'
import styled from 'styled-components'
import Image1 from '../assets/images/homepage-images/frame22.png'
import Image2 from '../assets/images/homepage-images/sun-frame.png'
import {motion} from 'framer-motion'
const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: rgba(24,24,24,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`
const I1 = styled(motion.img)`
  position: absolute;
  user-select: none;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: bottom;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 2;
`
const I2 = styled(motion.img)`
  height: 70vh;
  width: 80%;
  position: absolute;
  user-select: none;
  left: 2%;
  object-fit: contain;
  object-position: bottom;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 3;
  @media (max-width:600px){
    width: 50%;
    left: 10%;
  }
`

const Title = styled(motion.h1)`
  font-size: 4.6em;
  z-index: 5;
  text-transform: capitalize;
  background-color: transparent;
  padding: 0.3rem;
  opacity: 0.8;
  border-radius: 1rem;
  text-transform: 0 0 4px #fff;
  color: #fff;
  font-family: Hauora, monospace;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 2px 2px 0px #333, 3px 3px 0px #333, 3px 3px 0px #333,
    4px 4px 0px #333, 4px 4px 0px #333, 5px 5px 0px #333;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));

  @media screen and (max-width: 70em) {
    font-size: 3em;
  }
  @media screen and (max-width: 48em) {
    font-size: 2em;
  }
`
const Cta = styled(motion.h1)`
  font-size: 3.3em;
  z-index: 6;
  text-transform: capitalize;
  opacity: 1;

  text-transform: 0 0 4px #fff;
  color: #fff;
  font-family: Hauora, monospace;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 2px 2px 0px #333, 3px 3px 0px #333, 3px 3px 0px #333,
    4px 4px 0px #333, 4px 4px 0px #333, 5px 5px 0px #333;

  @media screen and (max-width: 70em) {
    font-size: 2.7em;
  }
  @media screen and (max-width: 48em) {
    font-size: 2.2em;
  }
`

const SixthSection = () => {
 
 

  return (
    <Section>
      <I1
      initial = {{scale:1}}
      whileInView = {{scale:0.3,rotate:21}}
      viewport={{ once: true }}
      transition = {{duration:1,delay:1}}
      src={Image1}/>
      <Title
       initial = {{top:"50%"}}
       whileInView={{top:'40%',scale:0.7,rotate:20}}
       viewport={{ once: true }}
       transition={{duration:1.3,delay:1}}
        style={{ top: '50%', position: 'absolute', textAlign: 'center',opacity:0.6 }}
      >
        TagSocial brings innovative<br />features and functionalities <br />{' '}
        to the social media landscape
      </Title>
      <I2 
      initial = {{top:"-40%",opacity:0}}
      whileInView={{top:'20%',rotate:-21,opacity:1}}
      viewport={{ once: true }}
      transition={{duration:1,delay:1.3}}
      src={Image2} />
    
    </Section>
  )
}
export default SixthSection
