import gsap from 'gsap'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import Image1 from '../assets/images/homepage-images/tgs-header-1.webp'
import Image2 from '../assets/images/homepage-images/second-section-2.png'
import Marquee from 'react-fast-marquee'

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background-color: var(--white);
  background-color: #181818;
  overflow: hidden;
`
const Blur1 = styled.div`
  height: 18rem;
  width: 14rem;
  position: absolute;
  left: -5%;
  top: 10%;
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
  bottom: 0;
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  margin: auto;
  object-fit: cover;
  object-position: bottom;
  z-index: 1;
  /* transform: rotate(-4deg); */
`

const I2 = styled.img`
  position: absolute;
  top: -100%;
  left: -100%;
  width: 60%;
  height: 80vh;
  object-fit: contain;
  z-index: 2;
  @media screen and (max-width: 30em) {
    height: 70vh;
    top: 10%;
  }
`

const TitleContainer = styled.div`
  width: 45%;
  height: 100%;
  padding: 0.3rem;
  gap: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  position: absolute;
  top: 5%;
  right: 0;

  @media screen and (max-width: 768px) {
    top: 30%;
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
  const sectionRef = useRef(null)

  const ImageRef1 = useRef(null)
  const ImageRef2 = useRef(null)
  const titleRef = useRef(null)

  let elements = gsap.utils.selector(titleRef)

  useLayoutEffect(() => {
    const Elem = sectionRef.current
    const ImageElem1 = ImageRef1.current
    const ImageElem2 = ImageRef2.current

    // pin the section
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
          end: `bottom+=500 bottom`,
          scrub: 1,
        },
      })
      .to(
        ImageElem1,
        { scale: 0.3, rotation: -15, left: '-10%',transitionDuration:0.1,delay:0 },
        'key1'
      )
      .to(
        ImageElem2,
        { scale: 1, rotation: 15, left: '20%', top: '5%',transitionDuration:0.7,delay:0 },
        'key1'
      )

    elements('h1').forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: `bottom bottom`,
            scrub: 1,
            // markers: true,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        "key2"
      )
    )
    
    elements('p').forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: `bottom bottom`,
            scrub: 1,
            // markers: true,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        "key2"
      )
    )

    elements('button').forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: `bottom bottom`,
            scrub: 1,
            // markers: true,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        "key2"
      )
    )
    return () => {
      if (t2) t2.kill()
    }
  }, [])

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
  return (
    <>
      <Section ref={sectionRef}>
        <Blur1 />
        <Blur2 />
        <Blur3 />
        <I1 ref={ImageRef1} src={Image1} />
        <I2 ref={ImageRef2} src={Image2} />
        <TitleContainer ref={titleRef}>
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

      <div style={{ backgroundColor: '#181818' }}>
        <Marquee speed={250}>
          <MarqueeH1
            whileHover={{
              textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
            }}
          >
            Give Yourself A Good Time. Get TagSocial Now.
          </MarqueeH1>
        </Marquee>
      </div>
    </>
  )
}

export default FirstSection
