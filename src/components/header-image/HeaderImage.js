import React from 'react'
import image from '../../assets/images/homepage-images/Group 4.png'
import { motion, useAnimation } from 'framer-motion'

const HeaderImage = () => {
  const controls = useAnimation()

  React.useEffect(() => {
    const pulseAnimation = async () => {
      await controls.start({
        scale: [1, 0.9, 1], // Pulsating effect, scaling up and down
        opacity: [1, 0.6, 1], // Fading effect
        // boxShadow: [
        //   '0px 0px 10px rgba(255,255,255,0.5)',
        //   '0px 0px 20px rgba(255,255,255,0.8)',
        //   '0px 0px 30px rgba(255,255,255,1)',
        // ], // Glowing effect
        rotate: [0, -5, 5], // Gentle rotation
        transition: { duration: 3, ease: 'easeInOut' }, // Animation duration
      })
    }
    pulseAnimation()
  }, [controls])

  return (
    <motion.img
      src={image}
      initial={{
        scale: 1,
        opacity: 1,
        rotate: 0,
        clipPath: 'ellipse(100% 100% at 50% 50%)',
      }}
      animate={controls}
      style={{
        height: '100vh',
        width: '100vw',
        objectFit: 'contain',
        backgroundColor:'blue',
        zIndex: 999,
      }}
    />
  )
}
export default HeaderImage
