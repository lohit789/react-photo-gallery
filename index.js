import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import thumbnails from './data.js'

ReactDOM.render(
  <App thumbnails={thumbnails} />,
  document.getElementById('root') 
)
