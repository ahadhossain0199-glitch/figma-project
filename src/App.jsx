import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Banner from './Components/Banner'
import About from './Components/About'
import CoreCard from './Components/CoreCard'

import KeyBenefits from './Components/KeyBenefits'
import Speaker from './Components/Speaker'
import Picnic from './Components/Picnic'
import VideoBtn from './Components/VideoBtn'
import Faqs from './Components/Faqs'
import Footer from './Components/Footer'
import Event from './Components/Event'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Banner/>
     
      <About/>
      <CoreCard/>
      <KeyBenefits/>
      <Event/>
      <Speaker/>
      <Picnic/>
      <VideoBtn/>
      <Faqs/>
      <Footer/>
    </>
  )
}

export default App
