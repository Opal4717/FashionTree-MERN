import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mynavbar from './components/Mynavbar';
import Card from './components/Card';
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
            <Route exact path="/" element={<Card />} />
          </Routes>
          {/* <Routes>
            <Route path="/home" element={<Home />} />
          </Routes> */}
        </div>
      </Router>
    </>
  );
}

export default App;
