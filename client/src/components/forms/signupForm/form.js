import React from 'react'

import Link from 'components/link'
import { FormWrapper, ValidatedInput, Button } from '../'

const Form = (props) => {
  const { onChange, isDisabled, onSubmit, errors } = props
  return (
    <FormWrapper>
      <ValidatedInput autoFocus required
        type='text' name='name'
        onChange={onChange} errors={errors.name} />
      <ValidatedInput required
        type='email' name='email'
        onChange={onChange} errors={errors.email} />
      <ValidatedInput required
        type='password' name='password'
        onChange={onChange} errors={errors.password} />
      <Button disabled={isDisabled()} onClick={onSubmit}>
        Sign Up
      </Button>
      <Link to='/forgot'>
        Forgot Password
      </Link>
    </FormWrapper>
  )
}

export default Form
