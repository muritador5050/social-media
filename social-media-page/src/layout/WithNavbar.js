import React from 'react'
import { Outlet } from 'react-router'
import MainPage from '../mainPage/MainPage'

const WithNavbar = () => {
  return (
    <div>
      <MainPage />
      <Outlet />
    </div>
  )
}

export default WithNavbar