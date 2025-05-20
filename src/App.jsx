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
