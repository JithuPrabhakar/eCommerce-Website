import Footer from './components/Footer'
import Header from './components/Header'

import { Container } from 'react-bootstrap'

import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import Login from './pages/Login'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/product/:id' element={<SingleProduct />} />
            <Route path='/cart/:id?' element={<Cart />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
