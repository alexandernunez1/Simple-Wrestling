import React, { useState, useEffect } from 'react'

import Button from 'components/button'
import { Wrapper, SideBar, Table } from '../'

const Roster = props => {
  const { name, roster, teams } = props

  const [form, setForm] = useState({})
  useEffect(() => {
    setForm({...form, ...roster})
  }, [roster])

  const onChange = (e) => {
    const { row, col } = JSON.parse(e.target.name)
    const { value } = e.target
    setForm({
      ...form,
      [row]: {
        ...form[row],
        [col.toLowerCase()]: value
      }
    })
  }

  const displayForm = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <Wrapper>
      <SideBar links={teams} location={'coach'} />
      <Table title={name ? `${name} Roster` : '...'}
        data={form} {...{onChange}} />
      <Button onClick={displayForm}>Save Roster</Button>
    </Wrapper>
  )
}

export default Roster