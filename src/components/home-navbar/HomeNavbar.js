import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import logo from '../../assets/images/homepage-images/Logo.png'
import { motion } from 'framer-motion'
import ctaImage1 from '../../assets/images/homepage-images/Frame 66.png'
import ctaImage2 from '../../assets/images/homepage-images/Frame 65.png'
gsap.registerPlugin(ScrollTrigger)

const Headers = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(24, 24, 24, 0.4);
  background-color: grey;
  /* background:linear-gradient(135deg, rgba(43, 43, 42, 0.6), rgba(93, 93, 93, 0.6), rgba(34, 34, 33, 0.6)); */
  backdrop-filter: blur(16px) !important;
  color: white;
  position: sticky;
  z-index: 99;
  height: 4.5rem;
  width: 100vw;
`
const BottomHeader = styled(motion.header)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 1.5rem;
  background: rgba(24, 24, 24, 0.3);
  border: 1px solid grey;
  padding: 0.3rem 0.4rem 0.5rem 0.4rem;
  /* background:linear-gradient(135deg, rgba(43, 43, 42, 0.6), rgba(93, 93, 93, 0.6), rgba(34, 34, 33, 0.6)); */
  
  position: fixed;
  z-index: 99;
  height: 5.5rem;
  width: 26.5rem;
  bottom: 5%; /* Position the element at the bottom of the viewport */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Center horizontally */
  @media screen and (max-width: 600px) {
    width: 25rem;
    height: 5.3rem;
  }
  @media screen and (max-width: 472px) {
    width: 24rem;
    height: 5.1rem;
  }
  @media screen and (max-width: 415px) {
    width: 23rem;
    height: 4.9rem;
  }
  @media screen and (max-width: 400px) {
    width: 20.8rem;
    height: 4.9rem;
  }
  img {
    height: 100%;
    opacity: 1;
    width: 50%;
    cursor: pointer;
  }
`
const Logo = styled(motion.a)`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;
  img {
    width: 3rem;
    margin-left: 1rem;
    height: 3rem;
    filter: brightness(0) invert(1) grayscale(1);
    user-select: none;
    @media screen and (max-width: 1117px) {
      width: 2.8rem;
      height: 2.8rem;
      margin-left: 0.8rem !important;
    }
  }
`

const Nav = styled(motion.nav)`
  width: 70%;
  font-family: Hauora, monospace;
  font-weight: 520 !important;

  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
  @media only Screen and (max-width: 1117px) {
    display: none;
  }
  .no-hover {
    text-decoration: none; /* Optional: Remove underline on hover */
  }

  .no-hover:hover::after {
    width: 0; /* Set width to 0 on hover to disable the hover effect */
  }

  a {
    line-height: 1.5;
    font-size: 1.2rem;
    font-family: Hauora, monospace;
    font-weight: 520 !important;
    color: white;
    &::after {
      content: '';
      display: block;
      height: 3px;
      width: 0;
      background: transparent;
      transition: width 0.5s;
    }
    &:hover::after {
      width: 100%;
      background: linear-gradient(
        109.6deg,
        rgb(6, 183, 249) 11.2%,
        rgb(25, 74, 236) 91.1%
      );
    }
    /* &:not(:last-child) {
      margin-right: 2rem;
    } */
    /* @media only Screen and (max-width: 48em) {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    } */
  }
`
const coolEffectAnimation = keyframes`
  0% {

    filter: hue-rotate(0deg);
  }
  50% {
   
    filter: hue-rotate(30deg);
  }
  100% {

    filter: hue-rotate(0deg);
  }
`

const Button = styled.button`
  font-family: Hauora, monospace;
  font-weight: 600 !important;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  /* border: 2px solid #fff !important; */
  border: none;
  background: linear-gradient(
    135deg,
    rgba(0, 126, 242, 1),
    rgba(0, 58, 108, 1)
  );
  padding: 0.8rem 0.8rem 0.8rem 0.8rem;
  margin-right: 2rem;
  border-radius: 0.2rem; /* Set border-radius to a high value */
  font-size: 1.2rem;
  color: #fff;
  font-weight: 400;
  cursor: pointer;
  transition: height 0.2s, transform 0.2s;
  &:hover {
    animation: ${coolEffectAnimation} 3s infinite; /* Apply the animation */
  }

  @media only screen and (max-width: 1117px) {
    font-size: 1.2rem;
    margin-right: 0;
    &:hover {
      transform: none;
    }
    &:focus {
      transform: none;
    }
    animation: none; /* Disable animation on smaller screens */
  }
`

const HamburgerBtn = styled(motion.button)`
  display: none;
  @media only screen and (max-width: 1117px) {
    display: inline-block;
  }
  position: relative;
  margin-right: 1.5rem;
  background-color: transparent;
  color: white;
  width: 2rem;
  height: 6px;
  border: none;
  margin-top: 0rem;
  transition: transform 0.3s, background-color 0.3s;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    background-color: white;
    width: 100%;
    height: 3px;
    display: block;
    position: absolute;
    left: 0;
    transition: top 0.3s, transform 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? '0' : '-0.5rem')};
    transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
  }

  &::after {
    top: ${(props) => (props.clicked ? '0' : '0.5rem')};
    transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
  }
`

const MobileMenu = styled.nav`
  z-index:999 !important;
  display: none;
  margin-right: 0.5rem;
  @media only Screen and (max-width: 1117px) {
    display: flex;
  }
  flex-direction: column;
  font-family: Hauora, monospace;
  font-weight: 520 !important;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  visibility: ${(props) => (props.clicked ? 'visible' : 'hidden')};

  background: rgba(24, 24, 24, 1);
  backdrop-filter: blur(7px) !important;
  border-radius: 1rem; /* Adjust the alpha value (0.7) for opacity */ /* Adds a blur effect for glass-like appearance */
  margin: 0.5rem;
  a {
    color: white;
    font-size: 1.3rem;
    margin: 1.5rem;
    cursor: pointer;
    font-family: Hauora, monospace;
    font-weight: 520 !important;
  }
`

const HomeNavbar = () => {
  const [click, setClick] = useState(false)
  //const handleClick = () => setClick(!click);
  const ref = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    const header = ref.current
    const bottom = bottomRef.current

    // ScrollTrigger setup
    ScrollTrigger.create({
      start: 'top',
      end: 'bottom',
      onUpdate: (self) => {
        // Check the direction of scroll
        const direction = self.direction === 1 ? 'down' : 'up'

        // Toggle visibility based on scroll direction
        if (direction === 'up') {
          gsap.to(header, { top: 0 })
          gsap.to(bottom, { bottom: '5%' })
        } else {
          gsap.to(header, { top: '-100%' })
          gsap.to(bottom, { bottom: '-100%' })
        }
      },
    })
  }, [])

  return (
    <>
      <Headers
      
        ref={ref}
      >
        <Logo
        initial={{ opacity:0}}
        animate={{ opacity: 1}}
         transition={{duration:1,delay:1.5,type:'ease'}}
        >
          <img src={logo} alt="TagSocial" />
        </Logo>
        <Nav
         initial={{ opacity:0}}
         animate={{ opacity: 1}}
          transition={{duration:1,delay:1.5,type:'ease'}}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '60%',
            }}
          >
            <a href="/">Home</a>
            <a href="/features">Features</a>
            <a href="/faqs">Faqs</a>
            <a href="/terms-and-conditions">Privacy Policy</a>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.syneidisi.tagsocial"
            target="_blank"
            class="no-hover"
          >
            <Button
             initial={{ opacity:0}}
             animate={{ opacity: 1}}
              transition={{duration:1,delay:1.5,type:'ease'}}
            >
              Download{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                fill="#fff"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 511.998 511.998"
              >
                <path
                  fill-rule="nonzero"
                  d="M255.999 0c70.684 0 134.695 28.658 181.018 74.981 46.324 46.324 74.981 110.334 74.981 181.018 0 70.691-28.657 134.695-74.981 181.018-46.323 46.324-110.327 74.981-181.018 74.981s-134.694-28.657-181.018-74.981C28.658 390.694 0 326.69 0 255.999c0-70.684 28.658-134.694 74.981-181.018C121.305 28.658 185.308 0 255.999 0zm-74.995 203.995c-29.412-16.955-43.962 6.609-27.542 23.789l84.234 95.914c15.311 15.318 21.289 15.318 36.607 0l84.234-95.914c16.303-17.26 2.086-40.686-27.55-23.789l-74.988 44.548-74.995-44.548zM410.99 101.009c-39.657-39.657-94.473-64.2-154.991-64.2-60.525 0-115.333 24.543-154.99 64.2-39.657 39.657-64.2 94.472-64.2 154.99 0 60.526 24.543 115.334 64.2 154.991 39.657 39.657 94.465 64.199 154.99 64.199 60.526 0 115.334-24.542 154.991-64.199 39.657-39.657 64.199-94.465 64.199-154.991 0-60.518-24.542-115.333-64.199-154.99z"
                />
              </svg>
            </Button>
          </a>
        </Nav>

        <HamburgerBtn
         initial={{ opacity:0}}
         animate={{ opacity: 1}}
          transition={{duration:1,delay:1.5,type:'ease'}}
        clicked={+click} onClick={() => setClick(!click)}>
          <span></span>
        </HamburgerBtn>

        <MobileMenu
         initial={{ opacity:0}}
         animate={{ opacity: 1}}
          transition={{duration:1,delay:1.5,type:'ease'}}
        clicked={+click}>
          <a href="/">Home</a>
          <a href="/features">Features</a>
          <a href="/faqs">FAQs</a>
          <a href="/terms-and-conditions">Privacy Policy</a>
          <a
            href="https://play.google.com/store/apps/details?id=com.syneidisi.tagsocial"
            target="_blank"
            class="no-hover"
          >
            <Button
             initial={{ opacity:0}}
             animate={{ opacity: 1}}
              transition={{duration:1,delay:1.5,type:'ease'}}
            >
              Download{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                fill="#fff"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 511.998 511.998"
              >
                <path
                  fill-rule="nonzero"
                  d="M255.999 0c70.684 0 134.695 28.658 181.018 74.981 46.324 46.324 74.981 110.334 74.981 181.018 0 70.691-28.657 134.695-74.981 181.018-46.323 46.324-110.327 74.981-181.018 74.981s-134.694-28.657-181.018-74.981C28.658 390.694 0 326.69 0 255.999c0-70.684 28.658-134.694 74.981-181.018C121.305 28.658 185.308 0 255.999 0zm-74.995 203.995c-29.412-16.955-43.962 6.609-27.542 23.789l84.234 95.914c15.311 15.318 21.289 15.318 36.607 0l84.234-95.914c16.303-17.26 2.086-40.686-27.55-23.789l-74.988 44.548-74.995-44.548zM410.99 101.009c-39.657-39.657-94.473-64.2-154.991-64.2-60.525 0-115.333 24.543-154.99 64.2-39.657 39.657-64.2 94.472-64.2 154.99 0 60.526 24.543 115.334 64.2 154.991 39.657 39.657 94.465 64.199 154.99 64.199 60.526 0 115.334-24.542 154.991-64.199 39.657-39.657 64.199-94.465 64.199-154.991 0-60.518-24.542-115.333-64.199-154.99z"
                />
              </svg>
            </Button>
          </a>
        </MobileMenu>
      </Headers>
      <BottomHeader
       initial={{ opacity:0}}
       animate={{ opacity: 1}}
        transition={{duration:1,delay:2,type:'ease'}}
        ref={bottomRef}
      >
        <img className="cta-image" src={ctaImage1} alt="" />
        <img className="cta-image" src={ctaImage2} alt="" />
      </BottomHeader>
    </>
  )
}
export default HomeNavbar
