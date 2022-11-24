import './App.css';
import "./styles/styles.scss";
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Page1 from './pages/Page1';


function App() {
  const history = createMemoryHistory();

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/page1' element={<Page1 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
