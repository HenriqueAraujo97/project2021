
import React, {useState} from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { SliderData } from '../components/HeroSection/SliderData';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';

import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar'

const Home = () => {
  const[isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

    
    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />  
          <Navbar toggle={toggle} />
          <HeroSection slides = {SliderData}/>
          <InfoSection {...homeObjOne}/>
          <InfoSection {...homeObjTwo}/>
          <InfoSection {...homeObjThree}/>
          <Services />
          <Footer />
         
         
        </>
    );
};

export default Home