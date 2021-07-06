import React from 'react'
import './MainPage.css'
import { useHistory } from 'react-router-dom'
import Navbar from '../../COMPONENTS/NAVBAR/Navbar';

function MainPage() {
    const history=useHistory();
    function getStartedPage(){
        history.push('/editor')
    }
    return (
        <div className="mainpage">
                 <Navbar/>

            
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div id='title'>
                  <span>Easiest way to create ReadMe Files.</span>
                  <button className="getstartedbutton" onClick={getStartedPage}>Get Started</button>
            </div>
            <div className="content">
                 <p>Here you can create ReadMe file with ease.</p>
                 <h1>100% Free</h1>
                 <p>@akarshbarar</p>
           

            </div>
        </div>
    )
}

export default MainPage
