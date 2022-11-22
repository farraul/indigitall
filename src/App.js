import './App.css';
import "./styles/styles.scss";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {  Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Page1 from './pages/Page1';


function App() {
  const history = createMemoryHistory();

  return (

    <div className="App">
      <Router location={history.location}>
        
        <Routes>
          <Route path='/page1' element={<Page1 />} />
          <Route path='/' element={<Home />} />
          {/* <Route path='/*' element={ <Navigate to="/" replace/>} /> */}

        </Routes>
      </Router>
    </div>

  )

}

export default App;
