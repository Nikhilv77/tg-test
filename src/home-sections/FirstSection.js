import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import image1 from '../assets/new-images/homepage-images/section-1-1.png'
import image2 from '../assets/new-images/homepage-images/section-1-2.png'
import image3 from '../assets/new-images/homepage-images/section-1-4.png'
import image4 from '../assets/new-images/homepage-images/section-1-3.png'


const Section = styled.section`
display: flex;
align-items: center;
background-color: rgba(24,24,24,0.4);
justify-content: center;
  position: relative;
  overflow: hidden;
  height: 89vh;
  width: 100vw;

  @media (max-width:800px){
    flex-direction: column-reverse;
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
   width: 50%;
  }

   @media (max-width:800px){
    width:90%;
    height: 100%;
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
      whileInView={{opacity: 1}}
      transition={{duration:1.5,type:'ease'}}
    >
      <h1>Discover, Connect & Share Your World on Tags Social.
</h1>
<h2>Embark on a journey of discovery, as Tags Social connects you with like-minded individuals at new locations. </h2>
    
      </TitleWrapper>
      <ImagesWrapper>
    <I1
initial={{ opacity:0,top:'-80%'}}
whileInView={{opacity: 1,top:'2%'}}
transition={{duration:1.5,type:'ease'}}
    src={image1} alt='hero-image'/>
    <I2
initial={{ opacity:0,right:'-20%'}}
whileInView={{opacity: 1,right:'11%'}}
transition={{duration:1.5,type:'ease'}}
       exit={{right:'-100%'}}
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




// import React from 'react'
// import styled from 'styled-components'
// import { motion } from 'framer-motion'
// import image1 from '../assets/new-images/homepage-images/section-2-1.png'
// import image2 from '../assets/new-images/homepage-images/section-2-2.png'
// import image3 from '../assets/new-images/homepage-images/section-2-3.png'
// import image4 from '../assets/new-images/homepage-images/section-2-4.png'
// import image5 from '../assets/new-images/homepage-images/section-2-5.png'
// import image6 from '../assets/new-images/homepage-images/section-1-4.png'
// import image7 from '../assets/new-images/homepage-images/section-1-3.png'


// const Section = styled.section`
//   position: relative;
//   background-color: rgba(24,24,24,0.4);
//   overflow: hidden;
//   height: 100vh;
//   width: 100vw;
// `


// const Wrapper = styled.div`
// margin-top: 11vh;
// height: 100%;
// width: 100%;
// position: relative;
// overflow: hidden;
// `
// const I1 = styled.img`
// height: 60vh;
// filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
// width: 20rem;
// position: absolute;

// left: 50%;
// top: 59%;
// transform: translate(-50%,-50%);
// z-index: 3;

//     @media (max-width: 1300px) {
//   width: 16rem;
//     }
// @media (max-width: 1200px) {
//   width: 15rem;
//     }
//     @media (max-width: 500px) {
//   width: 13rem;
//     }
//     @media (max-width: 400px) {
//   width: 11rem;
//     }
//     @media (max-width: 300px) {
//   width: 10rem;
//     }
  
   
// `
// const I2 = styled.img`
//   filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
// height: 44vh;
// width: 21rem;
// /* background-color: blue; */
// position: absolute;
// right: 25%;
// top: 47%;
// z-index: 2;
// /* @media (max-width: 1300px) {
//   width: 18rem;
// right: 16%;
//     }
// @media (max-width: 1200px) {
//   width: 17rem;
//   right: 14%;
//     } */
//     @media (max-width: 1100px) {
//   width: 17rem;
//   right: 23%;
  
//     } 
//     @media (max-width: 900px) {
//   right: 19%;
//   width: 15rem;
//     }
//     @media (max-width: 800px) {
//   right: 17%;
//   width: 14rem;
//     }
//     @media (max-width: 700px) {
//       right: 12%;
//       width: 12rem;
//     }
//     @media (max-width: 600px) {
//       right: 2%;
//       width: 10rem;
//     }
//     @media (max-width: 500px) {
//       right: -2%;
//       width: 9rem;
//     }

// `
// const I3 = styled.img`
//   filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
// height: 44vh;
// width: 21rem;
// /* background-color: blue; */
// position: absolute;
// right: 26%;
// top: 20%;
// z-index: 2;
// @media (max-width: 1100px) {
//   width: 17rem;
//   right: 23%;
//     } 
//     @media (max-width: 900px) {
//   right: 19%;
//     }
//     @media (max-width: 800px) {
//   right: 17%;
//     }
//     @media (max-width: 700px) {
//       right: 12%;
//     }
//     @media (max-width: 600px) {
//       right: 2%;
//     }
//     @media (max-width: 500px) {
//       right: -2%;
//     }
// `

// const I4 = styled.img`
//   filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
// height: 44vh;
// width: 21rem;
// /* background-color: blue; */
// position: absolute;

// left: 25%;
// top: 47%;
// z-index: 2;
// @media (max-width: 1100px) {
//   width: 17rem;
//   left: 23%;
//     } 
//     @media (max-width: 900px) {
//   left: 19%;
//     }
//     @media (max-width: 800px) {
//   left: 17%;
//     }
//     @media (max-width: 700px) {
//       left: 12%;
//     }
//     @media (max-width: 600px) {
//       left: 2%;
//     }
//     @media (max-width: 500px) {
//       left: -2%;
//     }
// `
// const I5 = styled.img`
//   filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
// height: 44vh;
// width: 21rem;
// /* background-color: blue; */
// position: absolute;
// left: 28%;
// top: 20%;

// @media (max-width: 1100px) {
//   width: 17rem;
//   left: 23%;
//     } 
//     @media (max-width: 900px) {
//   left: 19%;
//     }
//     @media (max-width: 800px) {
//   left: 17%;
//     }
//     @media (max-width: 700px) {
//       left: 12%;
//     }
//     @media (max-width: 600px) {
//       left: 2%;
//     }
//     @media (max-width: 500px) {
//       left: -2%;
//     }
// `

// const I6 = styled.img`
// height: 90vh;

// width: 50vw;
// position: absolute;
// right:0;
// top: 0;
// z-index: 1;

// `

// const I7 = styled.img`
// height: 98vh;

// width: 30vw;
// position: absolute;
// left: 0;
// bottom: 10%;
// z-index: 1;
// `

// const Title = styled(motion.div)`
// position: absolute;
// top: 0;
// left: 0;
// right: 0;
// bottom: 0;
//   overflow: hidden;
//   padding-right: 1rem;
//   padding-left: 2rem;
//   height: 100%;
//   width: 100vw;
//   z-index: 5;
//   display: flex;
//   flex-direction: row;
//  justify-content: space-between;
//    align-items: flex-start;
//    gap: 2rem;
//    @media ( (min-width : 601px) and (min-height: 900px)) {
//   row-gap: 3.5rem;
//     width: 45%;
//     top: 9%;
//     }
//    @media (max-width: 600px) {
//      justify-content: space-between;
 
//      top: 40%;
//      left: 50%;
//      transform: translate(-50%,-50%);
//      width: 80%;

// height: 84%;
//     }


//   h1 {
//     font-family: Hauora, monospace;
//      width: 40%;

//     text-align: left;
//     line-height: 1.4;
// z-index: 10;
//     text-shadow: 1px 1px 1px #fff;
//     font-size: 3.4rem;
//     user-select: none;
//     @media ( (min-width : 601px) and (min-height: 900px)) {
//      line-height: 1.6;
//      font-size: 3rem !important;
//     }
//     @media (max-width: 1200px) {
//       font-size: 2.5em;
//     }

//     @media (max-width: 1000px) {
//       font-size: 2.4em;
//     }
//     @media (max-width: 800px) {
//       font-size: 2.3em;
//     }
//     @media (max-width: 600px) {
//       font-size: 2em;
//       text-align: center;
//     }
//     @media (max-width: 500px) {
//       font-size: 1.8em;
//     }
//     @media (max-width: 400px) {
//       font-size: 1.6em;
//     }
//   }
//   h2 {
//     font-family: Hauora, monospace;
//     text-align: left;
//     line-height: 1.7;
//     font-weight: 400;
//     text-shadow: 1px 1px 1px #b0b0b0;
//     font-size: 1.6rem;
//     text-transform: capitalize;
//     user-select: none;
//     color: #b0b0b0;
//    z-index: 10;
//     width: 25%;

//     @media ( (min-width : 601px) and (min-height: 900px)) {
//      line-height: 1.9;
//      font-size: 2rem !important;
//     }

//     @media (max-width: 1200px) {
//       font-size: 1.8em;
//     }

//     @media (max-width: 1000px) {
//       font-size: 1.6em;
//     }
//     @media (max-width: 800px) {
//       font-size: 1.4em;
//     }
//     @media (max-width: 600px) {
//       font-size: 1.2em;
//       text-align: center;
//     }
//     @media (max-width: 500px) {
//       font-size: 1em;
//     }
//     @media (max-width: 400px) {
//       font-size: 1em;
//     }
//   }
//   `



// const Header = () => {
  

//   return (
//     <Section>
//     <Wrapper>
//       <Title
//       >
//       <h1>Transforming Social Connections
// </h1>
// <h2>Experience a new dimension of social networking that goes beyond the ordinary. TagSocial brings people together through shared interests and real-world connections.</h2>
//       </Title>
 
//     <I1 src={image1} alt='first-image'/>
//     <I2 src={image2} alt='second-image'/>
//     <I3 src={image3} alt='third-image'/>
//     <I4 src={image4} alt='fourth-image'/>
//     <I5 src={image5} alt='fifth-image'/>
//     <I6 src={image6} alt='background-blur'/>
//     <I7 src={image7} alt='background-blur'/>
//     </Wrapper>
//     </Section>
//   )
// }

// export default Header
