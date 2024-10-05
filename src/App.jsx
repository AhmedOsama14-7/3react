import React from 'react'
import { useState } from 'react'
import './styles/index.css'
import Home from './pages/home/Home'
import Layout from './components/layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SingleProduct from './pages/singleProduct/SingleProduct'

function App() {
    const routes = createBrowserRouter([
      {path:'/' , element: <Layout></Layout> , children: [
        {index:true , element: <Home></Home>},
        {path:'/:id' , element: <SingleProduct></SingleProduct> }
      ]}
    ])
    
  return (
    <>
      
      <RouterProvider router={routes}></RouterProvider>
     
    </>
  )
}

export default App
