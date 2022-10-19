import './App.css';
import "./styles/styles.scss";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import MainRouter from './components/MainRouter';
import { Switch, Route, Routes } from 'react-router-dom';
import { getComponent } from './utils/RoutesCreate'
import Home from './views/Home';



function App() {
  const history = createMemoryHistory();


  return (

    <div className="App">
      <Router location={history.location}>
        <Routes>
          <Route path='/' element={<Home />} />
{/*           <Route path='/' element={getComponent('home')} />
 */}        </Routes>
      </Router>
    </div>

  )

}

export default App;
