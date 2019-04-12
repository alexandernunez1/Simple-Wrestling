import React from 'react'
import styled from 'styled-components'

import { primary } from 'styles/themes'

const Text = styled.h2`
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 36px;
  text-align: center;

  color: ${primary.base};
`

const Header = (props) => {
  return <Text>{props.text}</Text>
}

export default Header
