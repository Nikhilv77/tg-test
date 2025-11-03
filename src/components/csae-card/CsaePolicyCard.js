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

const CsaePolicyCard = () => {
  const content = [
    { type: 'title', text: 'Zero-Tolerance Policy: Child Sexual Abuse and Exploitation (CSAE)' },
    { type: 'paragraph', text: 'This policy is an integral part of the Dumpit Terms of Service and Community Guidelines.' },

    { type: 'subtitle', text: 'Our Commitment' },
    {
      type: 'paragraph',
      text:
        'Dumpit (developed by <strong>Syneidisi Tech Private Limited</strong>) has a zero-tolerance policy against all forms of Child Sexual Abuse and Exploitation (CSAE). Our platform is committed to the protection of minors and strictly prohibits any content, conduct, or activity related to the abuse or exploitation of children.',
    },
    {
      type: 'paragraph',
      text:
        'We are dedicated to adhering to all applicable laws and regulations concerning child safety and will cooperate fully with law enforcement agencies in the investigation and prosecution of CSAE crimes.',
    },

    { type: 'subtitle', text: '1. Prohibited Content and Conduct' },
    {
      type: 'paragraph',
      text: 'The following content and conduct are strictly prohibited on Dumpit:',
    },
    {
      type: 'list',
      items: [
        '<strong>Child Sexual Abuse Material (CSAM):</strong> The creation, distribution, display, or access of any visual depiction of child sexual abuse. This includes, but is not limited to, images, videos, illustrations, and any digital content depicting child abuse.',
        '<strong>Solicitation:</strong> Any attempt to solicit or groom a minor for sexual acts or inappropriate contact.',
        '<strong>Exploitation:</strong> Any form of exploiting a child, including human trafficking, forced labor, or any activity that endangers the well-being of a child.',
        '<strong>Inappropriate Contact:</strong> Sharing personal or contact information of a minor in a sexual or exploitative context.',
      ],
    },

    { type: 'subtitle', text: '2. Moderation and Enforcement' },
    {
      type: 'paragraph',
      text:
        'We employ a combination of automated tools and human review to detect, identify, and remove CSAM and CSAE-related content from Dumpit as quickly as possible.',
    },
    {
      type: 'paragraph',
      text: 'Our enforcement actions include, but are not limited to:',
    },
    {
      type: 'list',
      items: [
        'Immediate removal of any identified CSAM.',
        'Permanent suspension or termination of the accounts responsible for sharing or possessing CSAM/CSAE content.',
        'Mandatory reporting to the National Center for Missing and Exploited Children (NCMEC) and relevant law enforcement agencies, including submission of all available user data.',
      ],
    },

    { type: 'subtitle', text: '3. Reporting CSAE' },
    {
      type: 'paragraph',
      text: 'If you encounter content or activity on Dumpit that you suspect involves CSAE, you must report it immediately.',
    },
    {
      type: 'paragraph',
      text:
        "<strong>In-App Reporting:</strong> Use the In-app reporting tool (e.g., 'Report Content' feature) located next to the content.",
    },
    {
      type: 'paragraph',
      text:
        '<strong>External Reporting:</strong> You can also report incidents directly to the National Center for Missing and Exploited Children (NCMEC) using their CyberTipline:',
    },
    {
      type: 'list',
      items: [
        '<a href="https://report.cybertip.org/" target="_blank" rel="noopener noreferrer">NCMEC CyberTipline Report Portal</a>',
        '<strong>NCMEC 24-Hour Hotline:</strong> 1-800-THE-LOST (1-800-843-5678)',
      ],
    },
    {
      type: 'paragraph',
      text: 'We treat all reports seriously and confidentially and will take swift action to protect children.',
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

    a {
      color: inherit;
      text-decoration: underline;
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
              dangerouslySetInnerHTML={{ __html: item.items.map((point) => `<li>${point}</li>`).join('') }}
            />
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

export default CsaePolicyCard;
