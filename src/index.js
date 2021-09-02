import React from 'react'
import ReactDOM from 'react-dom'
import './app/layout/style.scss'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app/layout/App'

const root = document.getElementById('root')

const render = () => {
  ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , root)
}

render()
