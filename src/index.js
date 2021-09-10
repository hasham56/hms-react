import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import './app/layout/style.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from './app/store/configureStore'
import { LoadingComponent } from './app/layout/LoadingComponent'
const App = lazy(() => import('./app/layout/App'))

const store = configureStore()
const root = document.getElementById('root')

const render = () => {
  ReactDOM.render(
    <Provider store={store}>

      <BrowserRouter>

        <Suspense fallback={<LoadingComponent />}>

          <App />

        </Suspense>

      </BrowserRouter>

    </Provider>
  , root)
}

render()
