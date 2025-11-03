import React, { useEffect } from 'react';
import { MantineProvider, createTheme } from '@mantine/core';
import ContactUs from '../components/contactus/ContactUs';
import SecondNavbar from '../components/second-navbar/SecondNavbar';
import SecondFooter from '../components/second-footer/SecondFooter';
import CsaePolicyCard from '../components/csae-card/CsaePolicyCard';

// Optional: import images for blur backgrounds like you did in PrivacyPage
import styled from 'styled-components';
import image6 from '../assets/new-images/homepage-images/section-1-4.png';
import image7 from '../assets/new-images/homepage-images/section-1-3.png';

// Optional blur background image component
const BlurImage = styled.img`
  position: absolute;
  z-index: -1;
  opacity: 0.7;
  height: 60vh;
  width: 20vw;
  top: 10%;
  left: 0;

  @media (max-width: 768px) {
    height: 40vh;
    width: 30vw;
  }
`;

const CsaePolicyPage = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);

  const theme = createTheme({});

  return (
    <div style={{ backgroundColor: '#000', position: 'relative', zIndex: 99 }}>
      {/* Optional blur background */}
      {/* <BlurImage src={image6} alt="blur-left" />
      <BlurImage src={image7} alt="blur-right" style={{ left: 'unset', right: 0 }} /> */}

      <SecondNavbar />
      <MantineProvider theme={theme}>
        <CsaePolicyCard />
      </MantineProvider>
      <SecondFooter />
    </div>
  );
};

export default CsaePolicyPage;
