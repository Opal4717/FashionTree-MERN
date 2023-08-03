import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mynavbar from './components/Mynavbar';
import Home from './components/Home';
import Product from './components/Product';
// import Home from './components/Home';

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
          </Routes>
          <Routes>
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
