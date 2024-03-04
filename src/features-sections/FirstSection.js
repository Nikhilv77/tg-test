import React from "react";
import styled from "styled-components";
import thirdSectionImg1 from '../assets/images/featurespage-images/section-1-1.png'
import thirdSectionImg2 from '../assets/images/featurespage-images/section-1-2.png'
const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const V1 = styled.img`
  position: absolute;
  top: 0;
  right:-100%; 
  width: 80%; 
  
  height: 79vh;
  object-fit: contain;
  object-position: bottom;
  z-index: 1;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
`;


const V2 = styled.img`

  position: absolute;
  left: -100%;
  top: 0%;
  top: 0;
  width: 80%; 
  height: 79vh;
  object-fit: contain;
  object-position: bottom;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
  z-index: 2;
`;


const TextContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
 justify-content:center;
  position: absolute;
  gap: 1rem;
  top: 10%;
  left: 25%;
  right: 25%;

@media screen and (max-width:520px){
  width: 70%;
}
@media screen and (max-width:320px){
  width: 80%;
}
`;


const Title = styled.h1`
  font-size: calc(3em + 1vw); 
  z-index: 5;
  font-family: Hauora, monospace !important;
  text-transform: capitalize;
  text-shadow: 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 2px 2px 0px #333,
                 3px 3px 0px #333,
                 3px 3px 0px #333,
                 4px 4px 0px #333,
                 4px 4px 0px #333,
                5px 5px 0px #333;
  color: #fff;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.1));

  @media screen and (max-width: 1120px) {
   font-size: calc(2.3em + 1vw);
  }
  @media screen and (max-width: 625px) {
    font-size: calc(1.7em + 1vw); 
  }
`;
const Text = styled.p`
font-family: Hauora, monospace !important;
font-size: calc(1em + 1vw);
line-height: 1.8;
  z-index: 5;
  text-transform: capitalize;
  text-transform: 0 0 4px #fff;
 
  color: 	#A8A8A8;
  font-family: 'Times Roman';
  text-shadow: 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 2px 2px 0px #333,
                 2px 2px 0px #333,
                 2px 2px 0px #333,
                 1px 1px 0px #333,
                2px 2px 0px #333;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
              
  @media screen and (max-width: 1120px) {
    font-size: calc(0.8em + 1vw);
  }
  @media screen and (max-width: 625px) {
    font-size: calc(0.7em + 1vw);
  }
`;






const ThirdSection = () => {
  
  return (
    
    <Section >
      <TextContainer>
      <Title>Do more with with Location based feed
</Title>
      <Text> Embark on a journey of discovery, as Tags Social connects you with like-minded individuals at new locations. 
</Text>
      </TextContainer>
      <V1 src={thirdSectionImg1}  />
      <V2 src={thirdSectionImg2}   />
      
    </Section>
  );
};

export default ThirdSection;