import React from 'react'
import './home.css'
import Header from './Header';
import Feature from './Feature';
import Member from './Member';
import Explore from './Explore';
import Faq from './Faq';
import Chooseus from './Chooseus';


//javascript 
function Home() {
  return (
    <div className='container2 flex flex-col'>
      
      <Header></Header>
      <Explore/>

      <Feature></Feature>
      <Member></Member>
      <Chooseus></Chooseus>
      <Faq></Faq>
    </div>

  )
}

export default Home