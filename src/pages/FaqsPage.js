import React from 'react'
import Faqs from '../components/faqs/Faqs'
import SecondNavbar from '../components/second-navbar/SecondNavbar'
import { MantineProvider, createTheme } from '@mantine/core'
import SecondFooter from '../components/second-footer/SecondFooter'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import image6 from '../assets/new-images/homepage-images/section-1-4.png'
import image7 from '../assets/new-images/homepage-images/section-1-3.png'

import { useEffect } from 'react'


const I3 = styled(motion.img)`
 opacity: 0.7 !important;
  height: 60vh;
  width: 20vw;
  position: absolute;
  right: 0;
  top: 20%;
  z-index: 1;
  @media (max-width:1100px){
    height: 40vh;
width: 40vw;
top: 25%;
  }
  @media (max-width :750px){
height: 35vh;
width: 35vw;
top: 25%;
  }
`
const I4 = styled(motion.img)`
opacity: 0.7 !important;
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

const FaqsPage = () => {
  const theme = createTheme({})
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  return (
    <div style={{ backgroundColor: '#181818',position:'relative' }}>
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
      <SecondNavbar />
      <MantineProvider theme={theme}>
        <Faqs />
      </MantineProvider>
      <SecondFooter />
    </div>
  )
}

export default FaqsPage
