import React from 'react';
import './App.css';
import PROFILE from './assets/image/profile.jpg';
import FLAG from './assets/image/flag.jpg';
function App() {
  return (
    <div class="box-one">
        <div class="box-two">

        </div>
        <div class="circle">
            {/*<img src="/profile pic.PNG"/> */}
            <img src={PROFILE} alt="profile" />
        </div>
        <div class="square">
            {/* <img src="./img/flag.PNG"/> */}
            <img src={FLAG} alt="flag" />
                        
        </div>
        <div class="tittle">
            <h1>Ayiti</h1>
        </div>
        <div class="sub-tittle">
            <h2>Kat Idantite</h2>
        </div>
        <div class="info">            
            <p>Livenghtston</p>
            <p>Ogou</p>                
            <p>Tabarre</p>
            <p>Dat fèt: 1 mai 1991</p>
            <p>Dat exp: 1 mai 2025</p>
            <p>Male</p>
            <p>Kat la fèt: 1 mai 2024</p>
            <p>00007F321</p>

        </div>
        <div class="card-number">
            <h3>L0102-9394-8184-3902</h3>
        </div>

    </div>
  )
}

export default App;
