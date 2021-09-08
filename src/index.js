import React from 'react'
import ReactDOM from 'react-dom'
import './app/layout/style.scss'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app/layout/App'
import { Provider } from 'react-redux'
import { configureStore } from './app/store/configureStore'

const store = configureStore()
const root = document.getElementById('root')

const render = () => {
  ReactDOM.render(
    <Provider store={store}>

      <BrowserRouter>

        <App />

      </BrowserRouter>

    </Provider>
  , root)
}

render()
