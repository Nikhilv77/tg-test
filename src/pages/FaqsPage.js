import React from 'react'
import Faqs from '../components/faqs/Faqs'
import SecondNavbar from '../components/second-navbar/SecondNavbar'
import { MantineProvider, createTheme } from '@mantine/core'
import SecondFooter from '../components/second-footer/SecondFooter'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import image6 from '../assets/new-images/homepage-images/section-1-4.png'
import image7 from '../assets/new-images/homepage-images/section-1-3.png'

const I3 = styled(motion.img)`
 opacity: 0.7 !important;
  height: 40vh;
  width: 20vw;
  position: absolute;
  right: 0;
  top: 8%;
  z-index: -1;

  @media (max-width:1100px){
    height: 40vh;
width: 40vw;
  }
  @media (max-width :750px){
height: 35vh;
width: 35vw;
  }
`
const I4 = styled(motion.img)`
opacity: 0.7 !important;
  height: 60vh;
  width: 20vw;
  position: absolute;

  left: 0;
 top: 20%;
  z-index: -1;
  @media (max-width:1100px){
    height: 75vh;
width: 25vw;
  }
  @media (max-width :750px){
height: 55vh;
width: 30vw;

  }
`



const PrivacyPage = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])
  const theme = createTheme({})

  return (
    <div style={{ backgroundColor: '#000000',position:'relative',zIndex:99 }}>
      
      
      <SecondNavbar />
      <MantineProvider theme={theme}>
       <Faqs/>
      </MantineProvider>
      <SecondFooter />
    </div>
  )
}

export default PrivacyPage
