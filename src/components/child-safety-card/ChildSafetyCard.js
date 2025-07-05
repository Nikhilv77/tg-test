import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: 'spring', stiffness: 100 },
  }),
};

const ChildSafetyCard = () => {
  const content = [
    { type: 'title', text: 'Child Safety Policy' },
    { type: 'paragraph', text: '<strong>App Name:</strong> Dumpit' },
    { type: 'paragraph', text: '<strong>Developer:</strong> Synedisi Tech Private Limited' },
    { type: 'paragraph', text: '<strong>Date:</strong> 22nd February 2022' },
    { type: 'paragraph', text: 'At Dumpit, we prioritize the safety and well-being of children using our mobile application, Dumpit. This declaration outlines our commitment to ensuring compliance with child safety standards and applicable regulations.' },

    { type: 'subtitle', text: '1. Compliance with Regulations' },
    {
      type: 'list',
      items: [
        'The Children’s Online Privacy Protection Act (COPPA)',
        'The General Data Protection Regulation (GDPR) – Children’s Data Protection',
        'App Store and Google Play child safety policies',
      ],
    },

    { type: 'subtitle', text: '2. Age-Appropriate Content and Features' },
    {
      type: 'list',
      items: [
        'Dumpit is designed to provide age-appropriate content suitable for the intended audience.',
        'We do not include harmful, explicit, or inappropriate content.',
        'Parental controls and settings are available where necessary.',
      ],
    },

    { type: 'subtitle', text: '3. Data Collection and Privacy' },
    {
      type: 'list',
      items: [
        'We collect only the minimum personal information necessary for app functionality.',
        'No personal data is collected from children under the age of 13 (or the applicable age of digital consent) without verified parental consent.',
        'We implement strict security measures to protect user data from unauthorized access.',
      ],
    },

    { type: 'subtitle', text: '4. Safety Features and Moderation' },
    {
      type: 'list',
      items: [
        'The app incorporates community guidelines to promote a safe and respectful environment.',
        'We employ content moderation to prevent inappropriate or harmful interactions.',
        'Reporting and blocking mechanisms are available for users to flag any safety concerns.',
      ],
    },

    { type: 'subtitle', text: '5. Parental Controls and Guidance' },
    {
      type: 'list',
      items: [
        'Parents and guardians are encouraged to review and supervise their child’s use of Dumpit.',
        'We provide clear privacy policies and parental guidance within the app settings.',
      ],
    },

    { type: 'subtitle', text: '6. Regular Review and Updates' },
    {
      type: 'list',
      items: [
        'Our team routinely reviews and updates safety features in response to emerging risks.',
        'We stay up to date with the latest regulatory changes to maintain compliance.',
      ],
    },

    {
      type: 'paragraph',
      text: 'By implementing these measures, we are committed to providing a safe and positive experience for all users, particularly children.',
    },
    { type: 'paragraph', text: '<strong>Email:</strong> contact@tagssocial.in' },
    {
      type: 'paragraph',
      text: '<strong>Address:</strong> GTPS Engineers (B) Housing Society, Plot 129, Sector 5, Ulwe, Navi Mumbai, 410206',
    },
  ];
const MotionContainer = styled(motion.div)`
  background-color: transparent;
  color: #fff;
  padding: 0 4em 4em 4em;
  width: 90vw;
  margin: auto;
  z-index: 9;
  font-family: 'Open Sans', sans-serif !important;

  @media screen and (max-width: 700px) {
    width: 94vw !important;
    padding: 0 1em 4em 1em;
  }
`;

const MotionTitle = styled(motion.h1)`
  font-family: Hauora, monospace !important;
  font-size: 2.5rem;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 700px) {
    font-size: 2.3rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 2.1rem;
  }
`;

const MotionSubTitle = styled(motion.h2)`
  font-size: 1.6rem;
  margin-top: 2rem;
  margin-bottom: 1.25rem;
  font-family: Hauora, monospace !important;

  @media screen and (max-width: 700px) {
    font-size: 1.4rem;
  }
`;

const MotionParagraph = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  text-align: left;

  @media screen and (max-width: 700px) {
    font-size: 1.1rem;
  }
`;

const MotionList = styled(motion.ul)`
  margin-bottom: 1.5rem;
  padding-left: 1.2rem;
  list-style-type: disc;

  li {
    margin-bottom: 0.75rem;
    font-size: 1.2rem;
    line-height: 1.6;
  }

  @media screen and (max-width: 700px) {
    li {
      font-size: 1.1rem;
    }
  }
`;

  return (
    <MotionContainer>
      {content.map((item, i) => {
        if (item.type === 'title') {
          return (
            <MotionTitle
              key={i}
              custom={i}
              initial="initial"
              animate="animate"
              variants={fadeIn}
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          );
        } else if (item.type === 'subtitle') {
          return (
            <MotionSubTitle
              key={i}
              custom={i}
              initial="initial"
              animate="animate"
              variants={fadeIn}
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          );
        } else if (item.type === 'list') {
          return (
            <MotionList
              key={i}
              custom={i}
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              {item.items.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </MotionList>
          );
        } else {
          return (
            <MotionParagraph
              key={i}
              custom={i}
              initial="initial"
              animate="animate"
              variants={fadeIn}
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          );
        }
      })}
    </MotionContainer>
  );
};

export default ChildSafetyCard;
