import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Loader } from '@react-three/drei'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback='null'>
      <App />
    </Suspense>
    <Loader
      containerStyles={{
        backgroundColor: '#000'
      }}
      innerStyles={{
        fontSize: '2rem',
        width: '200px',
        height: '20px',
      }} // Inner container styles
      barStyles={{
        width: '200px',
        height: '20px',
        backgroundColor: '#88b2d9'
      }} // Loading-bar styles
      dataStyles={{
        color: '#88b2d9'
      }} // Text styles
      initialState={(active) => active} // Initial black out state
    />
  </React.StrictMode>,
)
