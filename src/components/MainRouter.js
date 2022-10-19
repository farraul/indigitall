 import { Switch, Route, Routes } from 'react-router-dom';
import {getComponent} from '../utils/RoutesCreate'


const MainRouter = () => {
  return (

    <Routes>
      <Route path='/' component={getComponent('home')} />
    </Routes>

  )

}

export default MainRouter;
 
