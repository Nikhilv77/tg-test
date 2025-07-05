import { motion } from 'framer-motion';
import styled from 'styled-components';
import image from '../assets/new-images/homepage-images/image-two-section.png'

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #000000;
  overflow: hidden;
  display: grid;
  place-items: center;

  @media (max-width: 800px) {
    min-height: 80vh;
    padding: 2rem 1rem;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: start;
  width: 100%;
  max-width: 1200px;
  
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  
  @media (max-width: 800px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const Image = styled(motion.img)`
  width: 80%;
  height: auto;
  max-height: 80vh;
  border-radius: 1.5rem;
  object-fit: contain;
  /* filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5)); */
  user-select: none;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const TextContainer = styled(motion.div)`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Left-align text on desktop */
  justify-content: center;
  z-index: 2;
  gap: 1rem;
  color: #fff;
  font-family: Hauora, monospace !important;
  text-align: left;

  @media (max-width: 800px) {
    width: 100%;
    align-items: center; /* Center-align text on mobile */
    text-align: center;
    margin-top: 1.5rem;
  }
`;

const SmallText = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;

  @media (max-width: 800px) {
    font-size: 1.6rem;
  }
`;

const LargeText = styled.h1`
  font-size: 3.3rem;
  font-weight: 700;
  color: rgba(0, 121, 253, 1);
  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }

  @media (max-width: 800px) {
    font-size: 2.2rem;
  }
`;

const MediumText = styled.ul`
  font-size: 1.8rem;
  list-style: disc;
  margin-top: 1rem;
  padding-left: 1.5rem;
  font-weight: 600;

  @media (max-width: 800px) {
    list-style-type: none; 
    font-size: 1.6rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const ThirdSection = () => {
  return (
    <Section>
      <Wrapper>
        <ImageWrapper>
          <Image
            // src="https://firebasestorage.googleapis.com/v0/b/gcf-sources-829766584548-us-central1/o/Screenshot%202024-10-01%20at%205.57.07%20PM%201%20(2).png?alt=media&token=c051d33c-0fee-4f99-a5cd-1caf349ab857"
            src={image}
            initial={{ y: 500,rotateZ:-50 }}
            whileInView={{ y: 0,rotateZ:0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </ImageWrapper>
        <TextContainer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          <SmallText>Aura points for every post and likes you do!</SmallText>
          <LargeText>#Aura Point’s</LargeText>
          <MediumText>
            <li>Gain aura for every dumpworthy post you do, which is everything!</li>
            <li>Show some love to your fellow users by liking their post and increase your aura.</li>
            <li>Get Badges with your aura</li>
          </MediumText>
        </TextContainer>
      </Wrapper>
    </Section>
  );
};

export default ThirdSection;
