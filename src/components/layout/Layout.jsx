import React from 'react'
import Navbar from '../navbar/Navbar'
import Home from '../../pages/home/Home'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Navbar></Navbar> 
    <Outlet></Outlet>
    </> 
     )
}
