import React from 'react'
import ReactDOM from "react-dom"
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'



function Banner() {
  return (
    <header className="banner">
      <h1 className="site-title">My Website</h1>
      <nav className='nav'>
        <img src="react-logo.png" width="40px"></img>
        <ul className='nav-ul'>
          <li> pricing</li>
          <li>about</li>
          <li>contact us</li>
        </ul>
      </nav>
    </header>
  );
}


ReactDOM.render(<Banner/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
