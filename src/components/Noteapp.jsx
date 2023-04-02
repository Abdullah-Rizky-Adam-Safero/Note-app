import React from 'react'
import ActiveNote from './ActiveNote'
import AddNote from './AddNote'
import Footer from './Footer'
import Navbar from './Navbar'

function Noteapp() {
  return (
    <div>
        <Navbar/>
        <AddNote/>
        <ActiveNote/>
        <Footer/>
    </div>
  )
}

export default Noteapp
