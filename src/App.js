import './App.css';
import "./styles/styles.scss";
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LazyLoad from './pages/LazyLoad';


function App() {
  const history = createMemoryHistory();

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/lazyload' element={<LazyLoad />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
