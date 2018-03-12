import React from 'react'
import { render } from 'react-dom'
import { configureStore } from './store'
import { Provider } from 'react-redux'
import App from './features/ui/components/App'
import './index.css'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)