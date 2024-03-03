import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  min-height: 20vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  background-color: #181818;
  color: white;
`

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: 1.2rem;
    font-weight: 520 !important;
    text-transform: capitalize;
    font-family: Hauora, monospace !important;
    cursor: pointer;
    transition: all 0.3s ease;

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`

const Bottom = styled.div`
  padding: 0.5rem 0;

  font-size: ${(props) => props.theme.fontlg};
  font-family: Hauora, monospace !important;
  font-weight: 520 !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: auto;

  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`

const SecondFooter = () => {
  return (
    <Section>
      <FooterComponent>
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>FAQs</li>
          <li>Privacy Policy</li>
        </ul>
        <Bottom>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.2rem',
            }}
          >
            <div title="Facebook">
              <svg
                cursor="pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="126.445 2.281 589 589"
                id="facebook"
              >
                <circle
                  cx="420.945"
                  cy="296.781"
                  r="294.5"
                  fill="#333"
                ></circle>
                <path
                  fill="#fff"
                  d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
                ></path>
              </svg>
            </div>
            <div title="Instagram">
              <svg
                title="Instagram"
                cursor="pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="49.605 0 2834.65 2834.649"
                id="instagram"
              >
                <circle
                  cx="1466.93"
                  cy="1417.324"
                  r="1417.324"
                  fill="#444"
                ></circle>
                <path
                  fill="#fff"
                  d="M1892.128 726.379h-850.395c-147.639 0-265.749 118.11-265.749 265.749v850.394c0 147.639 118.11 265.748 265.749 265.748h850.395c147.638 0 265.749-118.109 265.749-265.748V992.127c0-147.638-118.112-265.748-265.749-265.748zm76.772 159.449h29.527V1122.048h-236.221v-236.22H1968.9zm-696.851 389.765c41.338-59.056 118.11-100.395 194.882-100.395s153.544 41.339 194.882 100.395c29.527 41.338 47.244 88.582 47.244 141.732 0 135.826-112.205 242.126-242.126 242.126-129.922 0-242.126-106.299-242.126-242.126-.001-53.15 17.716-100.394 47.244-141.732zm750.001 566.929c0 70.867-59.056 129.922-129.922 129.922h-850.395c-70.866 0-129.922-59.055-129.922-129.922v-566.929h206.693c-17.717 41.338-29.527 94.488-29.527 141.732 0 206.693 171.26 377.953 377.953 377.953s377.953-171.26 377.953-377.953c0-47.244-11.812-100.395-29.527-141.732h206.692l.002 566.929z"
                ></path>
              </svg>
            </div>
          </span>

          <span>TagSocial&copy; 2021. All Rights Reserved.</span>
        </Bottom>
      </FooterComponent>
    </Section>
  )
}

export default SecondFooter
