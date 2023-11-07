import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import router from './ApplicationRouter.jsx'
import { Provider } from 'react-redux'
import { store } from './store/Store.js'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}/>    
      </Provider>
  </React.StrictMode>,
)
