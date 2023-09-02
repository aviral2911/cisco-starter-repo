import React from 'react'
import {useState,useEffect} from 'react'
import ReactDOM from "react-dom"
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'


function PublicIPAddress({ ipVersion }) {
  const [ipAddress, setIpAddress] = useState('');
  const apiUrl = ipVersion === 'IPv4' ? 'https://api.ipify.org?format=json' : 'https://api6.ipify.org?format=json';

  useEffect(() => {
    // Make the HTTP request to the ipify API when the component mounts
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip))
      .catch((error) => console.error('Error fetching IP address:', error));
  }, [apiUrl]);

  return (
    <div>
      <h2 className='nav-url'>Your {ipVersion} Address:</h2>
      <p>{ipAddress}</p>
    </div>
  );
}

/*function Banner() {
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
}*/


ReactDOM.render(<PublicIPAddress/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
