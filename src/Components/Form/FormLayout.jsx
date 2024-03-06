import React from 'react'
import FormHeader from './formHeader/FormHeader'
import { Outlet } from 'react-router-dom'

function FormLayout() {
  return (
    <>
        <FormHeader />
            <Outlet />
    </>
  )
}

export default FormLayout