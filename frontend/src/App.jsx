import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mynavbar from './components/Mynavbar';
import Home from './components/Home';
import Product from './components/Product';
import Carousel from './components/Carousel';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Router>
        <div>
          <Mynavbar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
