import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import store from './store'
import { Provider } from 'react-redux'

import Adapter from './Adapter'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Adapter>
    <Provider store={store}>
      <App />
    </Provider>
  </Adapter>
)
