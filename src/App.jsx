import { useState } from 'react'

import './App.css'
import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { Bussinestypes } from './components/Bussinestypes'
import { Onepose } from './components/onepose'
import { Frequentquestions } from './components/Frequentquestions'
import { Footer } from './components/Footer'
import { Ready } from './components/Ready'

function App() {
  

  return (
    <>
    <Header/>
    <Banner/>
    <Bussinestypes/>
    <Onepose/>
    <Frequentquestions/>
<Ready/>
<Footer/>
  
    </>
  )
}

export default App
