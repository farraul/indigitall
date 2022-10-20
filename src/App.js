import './App.css';
import "./styles/styles.scss";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  const history = createMemoryHistory();

  return (

    <div className="App">
      <Router location={history.location}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>

  )

}

export default App;
