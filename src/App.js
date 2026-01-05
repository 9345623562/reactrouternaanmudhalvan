import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import DataInsert from './components/Datainsert'
import Help from './components/Help'
import View from './components/View'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}>Home</Route>
      <Route path='/View' element={<View></View>}>View</Route>
      <Route path='/ContactUs' element={<ContactUs></ContactUs>}>ContactUs</Route>
      <Route path='/DataInsert' element={<DataInsert></DataInsert>}>DataInsert</Route>
      <Route path='/Help' element={<Help></Help>}>Help</Route>
    </Routes>
    </>
  )
}

export default App