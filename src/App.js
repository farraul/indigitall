import './App.css';
import "./styles/styles.scss";
import { BrowserRouter } from 'react-router-dom';
import  history  from './history.js';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LazyLoad from './pages/LazyLoad';
import Cookies from './pages/Cookies'
import History from './pages/History';
import Call from './pages/Call';


function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes history={history}>
            <Route path='/cookies' element={<Cookies />} />
            <Route path='/' element={<Home />} />
            <Route path='/lazyload' element={<LazyLoad />} />
            <Route path='/history' element={<History />} />
            <Route path='/call' element={<Call />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
