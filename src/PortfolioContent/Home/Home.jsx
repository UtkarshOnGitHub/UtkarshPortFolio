import React from 'react'
import Footer from '../Footer/Footer'
import Profile from './Profile/Profile'
import "./Home.css"
import Navigation from './Navigation/Navogation'


const Home = () => {
  return (
    <div className='home-container'>
        <Navigation/>
        <Profile/>
        <Footer/>  
    </div>
  )
}

export default Home
