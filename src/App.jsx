// import { useState } from 'react'
import './App.css'
import Auth from './Auth/Auth'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import About from './About/About'
import Contact from './Contact/Contact'
import Layout from './Layout/Layout'

// MUI
// import React from 'react';
// import { 
//   Button, 
//   Typography,

// } from '@mui/material';

//     <div style={{ padding: '2rem' }}>
//       <Typography variant="h4" gutterBottom>
//         سلام صالح 👋
//       </Typography>
//       <Button variant="contained" color="primary">
//         دکمه متریال
//       </Button>
//     </div>


function App() {
  // const [count, setCount] = useState(0)
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={
            <>
              <Layout>
                <Auth />
              </Layout>
            </>
          }/>
          <Route path='/about' element={
            <>
              <Layout>
                <About />
              </Layout>
            </>
          }/>
          <Route path='/contact' element={
            <>
              <Layout>
                <Contact />
              </Layout>
            </>
          }/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
