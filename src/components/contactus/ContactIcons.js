import React from 'react'
import styled from 'styled-components'

import { Text, Box, Stack } from '@mantine/core'

// Define icons as objects with keys corresponding to the icon names
const icons = {
  'ri-mail-fill': {
    title: 'Email',
    description: 'contact@tagsocial.com',
  },
  'ri-phone-fill': {
    title: 'Phone',
    description: '+91 9876543210',
  },
  'ri-building-4-fill': {
    title: 'Address',
    description: 'Kharghar, Navi Mumbai, Maharashtra',
  },
  'ri-sun-fill': {
    title: 'Working hours',
    description: '8 a.m. – 11 p.m.',
  },
}

// Styled components
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--mantine-color-white);
`

const Icon = styled(Box)`
  margin-right: var(--mantine-spacing-md);
  background-color: transparent;
`

const Title = styled(Text)`
  color: var(--mantine-color-blue-0);
  font-size: 1.1rem !important;
  font-family: 'Tenor Sans', sans-serif;
  @media screen and (max-width: 720px) {
    font-size: 1rem !important;
  }
`

const Description = styled(Text)`
  color: var(--mantine-color-white);
  font-size: 1.1rem !important;
  font-family: 'Tenor Sans', sans-serif;
  @media screen and (max-width: 720px) {
    font-size: 1rem !important;
  }
`

// Function to generate icon elements
function ContactIconsList() {
  const items = Object.keys(icons).map((iconKey, index) => {
    const icon = icons[iconKey]
    return (
      <Wrapper key={index}>
        <Icon mr="md">
          <i className={iconKey} style={{ fontSize: '1.6rem' }} />
        </Icon>
        <div>
          <Title size="xs">{icon.title}</Title>
          <Description>{icon.description}</Description>
        </div>
      </Wrapper>
    )
  })

  return <Stack>{items}</Stack>
}

export default ContactIconsList
