// import React from 'react'
// import styled from 'styled-components'
// import { motion } from 'framer-motion'
// import image1 from '../../assets/new-images/homepage-images/section-1-1.png'
// import image2 from '../../assets/new-images/homepage-images/section-1-2.png'
// import image3 from '../../assets/new-images/homepage-images/section-1-4.png'
// import image4 from '../../assets/new-images/homepage-images/section-1-3.png'

// const HeaderSection = styled.section`
//   position: relative;
//   background: rgba(24, 24, 24, 0.5);
//   overflow: hidden;
//   height: calc(100vh - 4.5rem);
//   width: 100vw;
// `

// const I1 = styled(motion.img)`
//   position: absolute;
//   height: 42rem;
//   width: 24rem;
//   object-fit: contain;
//   z-index: 4;
//   @media (max-width:750px) {
//     height: 23rem;
//     width: 11rem;
//   }
// `
// const I2 = styled(motion.img)`
//   position: absolute;
//   height: 34rem;
//   width: 23rem;
//   object-fit: contain;
//   z-index: 3;
//   @media (max-width:750px) {
//     height: 20rem;
//     width: 12rem;
//   }
// `
// const I3 = styled(motion.img)`
//   height: 80vh;
//   width: 30vw;
//   position: absolute;
//   right: 0;
//   top: 0;
//   z-index: 1;
// `
// const I4 = styled(motion.img)`
//   height: 84vh;
//   width: 20vw;
//   position: absolute;
//   left: 0;
//   bottom: 10%;
//   z-index: 1;
// `
// const ImageContainer = styled.div`
//   height: 100%;
//   width: 50%;
//   z-index: 3;
//   position: absolute;
//   right: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @media (max-width:750px) {
//     height: 55.5%;
//     background-color: blue;
//     width: 100%;
//     top: 0;
//     left: 50%;
//     transform: translateX(-50%);
//   }
// `
// const Title = styled(motion.div)`
//   overflow: hidden;
//   position: absolute;
//   /* background-color: green; */
//   height: 100%;
//   width: 50%;

//   z-index: 5;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 2rem;
//   color: ${(props) => props.theme.text};
//   @media (max-width:750px) {
//     justify-content: flex-start;
//     height: 40%;
//     width: 100%;
//     bottom: 0;
//     left: 50%;
//     transform: translateX(-50%);
//     gap: 1rem;
//     background-color: green;
//   }

//   h1 {
//     font-family: Hauora, monospace;
//     text-align: center;
//     line-height: 1.3;
//     text-shadow: 1px 1px 1px ${(props) => props.theme.body};
//     font-size: 3.5em;
//     width: 90%;
//     user-select: none;
//     @media (max-width: 750px) {
//       font-size: 2em;
//       width: 90%;
//       text-align: center;
//     }
//     @media (max-width: 600px) {
//       font-size: 1.9em;
//     }
//     @media (max-width: 500px) {
//       font-size: 1.8em;
//     }
//     @media (max-width: 400px) {
//       font-size: 1.7em;
//     }
//   }

//   h2 {
//     font-family: Hauora, monospace;
//     text-align: center;
//     font-weight: 400;
//     font-size: 1.7em;
//     text-transform: capitalize;
//     color: #b0b0b0;

//     width: 90%;
//     @media (max-width: 750px) {
//       font-size: 1.3em;
//       text-align: center;
//     }
//     @media (max-width: 600px) {
//       font-size: 1.2em;
//     }
//     @media (max-width: 500px) {
//       font-size: 1.1em;
//     }
//     @media (max-width: 400px) {
//       font-size: 1em;
//     }
//   }
// `

// const Header = () => {
//   return (
//     <HeaderSection>
//       <ImageContainer>
//         <I1
//           initial={{
//          left:'-150%',scale:0.3
//           }}
//           animate={{
//             opacity: 1,left:'15%',scale:1
//           }}
//           transition={{
//             delay: 1,
//             duration: 1.4,
//           }}
//           src={image1}
//         />
//         <I2
//           initial={{
//          right:'-40%',scale:0.3
//           }}
//           animate={{
//             opacity: 1,right:'15%',scale:1
//           }}
//           transition={{
//             delay: 1,
//             duration: 1.4,
//           }}
//           src={image2}
//         />
//       </ImageContainer>
//       <I3
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1.5, type: 'ease' }}
//         src={image3}
//         alt="background-blur"
//       />
//       <I4
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1.5, type: 'ease' }}
//         src={image4}
//         alt="background-blur"
//       />
//       <Title
//         initial={{
//           opacity: 0,
//         }}
//         animate={{
//           opacity: 1,
//         }}
//         transition={{
//           delay: 2,
//           duration: 1.4,
          
//         }}
//       >
//         <motion.h1>
//           Discover, Connect & Share Your World on Tags Social
//         </motion.h1>

//         <motion.h2>
//           Embark on a journey of discovery, as Tags Social connects you with
//           like-minded individuals at new locations
//         </motion.h2>
//       </Title>
//     </HeaderSection>
//   )
// }

// export default Header

import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Image2 from '../../assets/images/homepage-images/second-section-2.png'

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
  gap: 1rem;
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
  /* background-color: yellow; */
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
