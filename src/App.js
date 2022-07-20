import logo from './logo.svg';
import './App.css';
import ButtonCreateUser from './components/adhoc/buttoncreateuser';
import ListUsers  from './components/adhoc/ListUsers';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import "./styles/styles.scss";

function App() {
  return (
      <div >
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Test React
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{
            width: '60%',
            margin: '0 auto',
            marginTop: 50,
          }}>
          <Paper>
            <div style={{
              minHeight: 200,
              padding: 25
            }}>
            <Typography variant="title" color="inherit" style={{display: 'inline'}}>Listado de usuarios</Typography>
            {' '}

            <ButtonCreateUser/>
            <ListUsers/>

            </div>
          </Paper>
        </div>
      </div>
    
  );
}

export default App;
