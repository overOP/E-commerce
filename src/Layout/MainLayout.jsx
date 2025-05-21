import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../pages/Nav'

const MainLayout = () => {
  return (
    <>
    <header>
        <Nav/>
    </header>
    <main>
        <Outlet/>
    </main>
    <footer></footer>
    </>
  )
}

export default MainLayout
