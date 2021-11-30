import React,{useState} from 'react'
import Assist from '../components/Assistencia'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';

const AssistPage = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Assist />
      <Footer />
    </>
  )
}

export default AssistPage
