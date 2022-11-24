import ButtonCreateUser from '../../components/ButtonCreateUser';
import ListUsers from '../../components/ListUsers';

import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { getUsers } from '../../services/api';
import Header from '../../components/Header';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

const Home = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const users = await getUsers()
    setUsers(users)
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  return (
    <>

      <Header />
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
            <ButtonCreateUser users={users} setUsers={setUsers} />

            {users &&
              <ListUsers users={users} setUsers={setUsers} />
            }

          </div>
        </Paper>
      </div>
    </>

  );
}




export default Home;