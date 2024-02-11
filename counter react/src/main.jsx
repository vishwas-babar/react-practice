import React from 'react'
import ReactDOM from 'react-dom/client'
import {App, Car} from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

    {/* here we given the attribute this attribute will going into the props onject which we given as parameter Car component funciton */}
    <Car company="ford" name="endrover" />  
  </React.StrictMode>,
)
