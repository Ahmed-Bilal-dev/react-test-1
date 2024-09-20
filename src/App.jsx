import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
    return(
    <div className="card">
        <div className="img1">
        <img src="./src/assets/images/Rectangle 2.png" alt="" />
        </div>
       
       <div className="img2">
        <img src="./src/assets/images/Ellipse 1 (16).png" alt="" />
       </div>

       <div className="cardData">
        <h1>Chisom Chukwukwe</h1>
        <h2>Ui/Ux Designer</h2>
        <p>Hardworking and reliable UI/UXdesigner focused on <br /> going above and beyond to support teams and serve <br /> customers. </p>
       </div>
       <div className="socialMedia">
       <img src="./src/assets/images/Frame 45.png" alt="" />
       </div>
       <div className="btn">
        <button className='button'>View profile</button>
       </div>
       
      
    </div>
    )
}

export default App
