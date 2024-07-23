import React from 'react'
import './home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from './Header';
import Feature from './Feature';
import Member from './Member';
import Chooseus from './Chooseus';
import Faq from './Faq';

//javascript 
function Home() {
  return (
    <div className='container2 flex flex-col'>
      
      <Header></Header>
     

      <div className='explore flex flex-col justify-center h-96'>
        <h1 class="mb-7 mt-9 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">Start Exploring</h1>
        <p class="  text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-white">Discover the latest trends in fashion</p>
      </div>

      <Feature></Feature>
      <Member></Member>
      <Chooseus></Chooseus>
      <Faq></Faq>
    </div>

  )
}

export default Home