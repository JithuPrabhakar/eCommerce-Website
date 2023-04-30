import Footer from './components/Footer'
import Header from './components/Header'

import { Container } from 'react-bootstrap'

import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<SingleProduct />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
