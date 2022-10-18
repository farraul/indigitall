import './App.css';
import FormCreateUser from './components/ButtonCreateUser';
import ListUsers from './components/ListUsers';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import "./styles/styles.scss";
import { useEffect, useState } from 'react';
import { getUsers } from './api';

function App() {

  const [users, setUsers] = useState([]);


  const getAllUsers = async () => {
    const users= await getUsers()
    setUsers(users)
  }

    useEffect(() => {
      getAllUsers()
    }, [])


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
          width: '100%',
          maxWidth: '65em',
          margin: '0 auto',
          marginTop: 50,
        }}>
          <Paper>
            <div style={{
              minHeight: 200,
              padding: 25
            }}>
              <Typography variant="title" color="inherit" style={{ display: 'inline' }}>Listado de usuarios</Typography>
              {' '}

              <FormCreateUser users={users} setUsers={setUsers} />

              {users &&
                <ListUsers users={users} setUsers={setUsers} />
              }

            </div>
          </Paper>
        </div>
      </div>

    );
  }

  export default App;
