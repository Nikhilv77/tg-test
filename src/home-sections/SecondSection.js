/* eslint-disable react-hooks/exhaustive-deps */
import gsap from 'gsap'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image1 from '../assets/images/homepage-images/thirdsection-1.png'
import Image2 from '../assets/images/homepage-images/thirdsection-2.png'
import Marquee from 'react-fast-marquee'
const Section = styled.section`
  width: 100vw;
 min-height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #181818;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Blur1 = styled.div`
  height: 18rem;
  width: 14rem;
  position: absolute;
  left: -5%;
  top: 20%;
  border-radius: 70%;
  background-color: grey;
  filter: blur(72px);
  z-index: -999;
  opacity: 0.5;
  @media screen and (max-width: 1120px) {
    height: 9rem;
    width: 7rem;
  }
  @media screen and (max-height: 600px) {
    height: 6rem;
    width: 4rem;
  }
`
const Blur2 = styled.div`
  height: 26rem;
  width: 18rem;
  position: absolute;
  right: -5%;
  bottom: 0;
  border-radius: 60%;
  background-color: grey;
  filter: blur(72px);
  z-index: -999;
  opacity: 0.5;
  @media screen and (max-width: 1120px) {
    height: 13rem;
    width: 9rem;
  }
  @media screen and (max-height: 600px) {
    height: 8rem;
    width: 5rem;
  }
`
const Blur3 = styled.div`
  height: 13rem;
  width: 9rem;
  position: absolute;
  left: -5%;
  top: 0;
  border-radius: 60%;
  background-color: grey;
  filter: blur(72px);
  z-index: -999;
  opacity: 0.5;
  @media screen and (max-width: 1120px) {
    height: 6rem;
    width: 4rem;
  }
  @media screen and (max-height: 600px) {
    height: 3rem;
    width: 3rem;
  }
`
const I1 = styled.img`
  position: absolute;
  top: -150%; /* initial position */
  width: 70%;
  height: 86vh;
  object-fit: contain;
  object-position: bottom;
  z-index: 1;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
`

const I2 = styled.img`
  position: absolute;
  right: -100%;
  width: 70%;
  height: 86vh;
  object-fit: contain;
  object-position: bottom;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
  z-index: 2;
`

const TitleContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 12%;
  left: 4%;

  @media screen and (max-width: 1120px) {
    top: 10%;
    left: 25%;
    right: 25%;
  }
  @media screen and (max-width: 620px) {
    top: 15%;
  }
`
const TextContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 1.4rem;
  top: 14%;
  left: 8%;
  /* text-align: justify; */

  @media screen and (max-width: 1120px) {
    top: 30%;
  }
  @media screen and (max-height: 600px) {
    top: 20%;
  }
  @media screen and (max-width: 400px) {
    top: 17%;
    width: 50%;
  }
`

const Title = styled.h1`
  font-size: calc(
    3.3em + 1vw
  ); /* Adjust the font size based on viewport width */
  z-index: 101;
  text-transform: capitalize;
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 2px 2px 0px #333, 3px 3px 0px #333, 3px 3px 0px #333,
    4px 4px 0px #333, 4px 4px 0px #333, 5px 5px 0px #333;
  color: #fff;
  font-family: Hauora, monospace !important;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));

  @media screen and (max-width: 1120px) {
    font-size: calc(2.6em + 1vw); /* Adjust font size for smaller screens */
  }
  @media screen and (max-width: 625px) {
    font-size: calc(
      2.2em + 1vw
    ); /* Adjust font size for even smaller screens */
  }
`
const Text = styled.p`
  font-family: Hauora, monospace !important;
  font-size: calc(1.2em + 1vw);
  line-height: 1.8;
  z-index: 101;
  text-transform: capitalize;
  text-transform: 0 0 4px #fff;

  color: #b0b0b0;
  font-family: 'Times Roman';
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333, 2px 2px 0px #333,
    2px 2px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));

  @media screen and (max-width: 1120px) {
    font-size: calc(1.2em + 1vw);
  }
  @media screen and (max-width: 625px) {
    font-size: calc(1em + 1vw);
  }
`

const Button = styled.button`
  font-family: Hauora, monospace;
  font-weight: 600;
  padding: 0.8rem 2rem 0.8rem 2rem;
  font-size: calc(0.7em + 1vw);
  border: none;
  background: linear-gradient(
    135deg,
    rgba(0, 126, 242, 1),
    rgba(0, 58, 108, 1)
  );
  color: #fff;
  border-radius: 0.3rem;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
  align-self: flex-start;
  z-index: 99;

  &:hover {
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #007fff;
    color: #fff;
    box-shadow: 0 0 20px 10px rgba(0, 115, 207, 0.2);
  }

  @media screen and (max-width: 1120px) {
    font-size: calc(0.9em + 1vw);
  }

  @media screen and (max-width: 625px) {
    font-size: calc(0.7em + 1vw);
    padding: 0.8rem 2rem 0.8rem 2rem;
  }
`

const MarqueeH1 = styled.h1`
  text-shadow: 1px 1px 0px #333, 1px 1px 0px #333, 1px 1px 0px #333,
    1px 1px 0px #333, 1px 1px 0px #333, 2px 2px 0px #333, 2px 2px 0px #333,
    3px 3px 0px #333, 3px 3px 0px #333, 4px 4px 0px #333 !important;
  font-family: Hauora, monospace;
  color: #fff;
  font-size: 4.3rem;
  background-color: #383838;

  @media only screen and (max-width: 700px) {
    font-size: 3rem;
  }
`

const SecondSection = () => {
  console.log('logged second')

  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)

  const ImageRef1 = useRef(null)
  const ImageRef2 = useRef(null)
  const titleRef = useRef(null)
  const textRef = useRef(null)

  let elements = gsap.utils.selector(titleRef)
  const subElements = gsap.utils.selector(textRef)

  useLayoutEffect(() => {
    const Elem = sectionRef.current
    const ImageElem1 = ImageRef1.current
    const ImageElem2 = ImageRef2.current

    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: 'top top',
        end: `bottom+=500 bottom`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    })

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: 'top top',
          end: `bottom+=700 bottom`,
          scrub: 1,
        },
      })
      .to(ImageElem1, { top: '8%', right: '10%', scale: 1,transitionDuration:0.6 }, 'key1')
      .to(ImageElem2, { top: '8%', right: '-5%', scale: 1,transitionDuration:0.6  }, 'key1')
    elements('h1').forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: `bottom bottom`,
            scrub: 1,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        'key3'
      )
    )
    subElements('p').forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: `bottom bottom`,
            scrub: 1,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        'key3'
      )
    )
    subElements('button').forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: `bottom bottom`,
            scrub: 1,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        'key3'
      )
    )
    return () => {
      if (t2) t2.kill()
    }
  }, [])

  return (
    <>
      <Section ref={sectionRef}>
        <Blur1 />
        <Blur2 />
        <Blur3 />
        <TitleContainer ref={titleRef}>
          <Title>Transforming Social Connections</Title>
        </TitleContainer>
        <TextContainer ref={textRef}>
          <Text>
            Connect with like-minded individuals and begin building meaningful
            relationships. Get started now!
          </Text>
          <Button>GET STARTED</Button>
        </TextContainer>
        <I1 ref={ImageRef1} src={Image1} />
        <I2 ref={ImageRef2} src={Image2} />
      </Section>

      <div
        style={{
          backgroundColor: '#181818',
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <Marquee speed={250} direction="right">
          <MarqueeH1
            whileHover={{
              textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
            }}
          >
            Enjoy Awesome Features. Get To Know Amazing People.
          </MarqueeH1>
        </Marquee>
      </div>
    </>
  )
}

export default SecondSection
