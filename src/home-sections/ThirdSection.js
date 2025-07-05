import { motion } from 'framer-motion';
import styled from 'styled-components';
import image from '../assets/new-images/homepage-images/image-three-section.png'

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
    text-align: center; /* Center-align content on mobile */
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
    order: -1; /* Move image to the top on mobile */
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
  align-items: flex-start;
  justify-content: center;
  z-index: 2;
  gap: 1rem;
  color: #fff;
  font-family: Hauora, monospace !important;
  text-align: left; /* Left-align text on desktop */

  @media (max-width: 800px) {
    width: 100%;
    text-align: center; /* Center-align text on mobile */
    align-items: center;
    margin-top: 1.5rem;
  }
`;

const SmallText = styled.h2`
  font-size: 2rem;
  color: #fff;
  font-weight: 600;

  @media (max-width: 800px) {
    font-size: 1.6rem;

  }
`;

const LargeText = styled.h1`
  font-size: 3.3rem;
  font-weight: 700;
  color: rgba(0, 121, 253, 1);

  @media (max-width: 1200px) {
    font-size: 2.7rem;
  }

  @media (max-width: 800px) {
    font-size: 2.4rem;
  }
`;

const MediumText = styled.ul`
  font-size: 1.8rem;
  list-style: disc;
  margin-top: 1rem;
  padding-left: 1.6rem;
  font-weight: 600;

  @media (max-width: 800px) {
    list-style-type: none; /* Hides bullet points on smaller screens */
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const ThirdSection = () => {
  return (
    <Section>
      <Wrapper>
        <TextContainer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          <SmallText>You’re not the only trendsetter! Befriend like-minded peeps</SmallText>
          <LargeText>#Unlmited Swipes </LargeText>
          <MediumText>
            <li>No limit to connect


</li>
            <li>Befriend people you vibe with and enjoy global and personal feeds.</li>
            <li>Build lasting friendships</li>
            <li>Be part of the trendsetting community</li>
          </MediumText>
        </TextContainer>
        <ImageWrapper>
          <Image
            // src="https://firebasestorage.googleapis.com/v0/b/gcf-sources-829766584548-us-central1/o/Screenshot%202024-10-01%20at%206.09.19%20PM%202%20(3).png?alt=media&token=fec7db1e-c804-4871-8207-5f165b161b1a "
            src = {image}
            initial={{ y: -300,rotateZ:30 }}
            whileInView={{ y: 0,rotateZ:0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </ImageWrapper>
      </Wrapper>
    </Section>
  );
};

export default ThirdSection;
