import React, { useState } from 'react'
import styled from 'styled-components'
import request from 'api'

import SearchBar from 'components/searchBar'
import Header from 'components/header'

const Wrapper = styled.section`
  position: relative;
`

const Tournaments = () => {
  const [state, setState] = useState({})

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    request({endpoint: 'https://jsonplaceholder.typicode.com/posts', body: JSON.stringify(state)})
    .then(res => alert(JSON.stringify(res)))
    .catch(err => new Error(err))
  }

  return (
    <Wrapper>
      <Header text='Tournaments' />
      <SearchBar submit={onSubmit} onchange={handleChange} />
    </Wrapper>
  )
}

export default Tournaments