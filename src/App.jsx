import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Research from './pages/Research'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="logo">🛒 ShopEase</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/research">Research</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App