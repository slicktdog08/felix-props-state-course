import React, { useState } from 'react';
import User from './User';
import {
  Typography, Grid
} from '@mui/material';

function App() {

  const [users, setUsers] = useState([
    {
      id: 0,
      firstName: 'Tyler',
      lastName: 'Clay',
      favColor: 'blue',
      age: 24
    },
    {
      id: 1,
      firstName: 'Felix',
      lastName: 'Perez',
      favColor: 'white',
      age: 23
    }
  ]);

  const [editModeID, setEditModeID] = useState(null);

  const handleUserSave = (editedUser) => {
    console.log('editedUser', editedUser);
    const newUsers = [...users];
    const userIndex = users.findIndex((user) => user.id === editedUser.id);
    console.log('userIndex', userIndex)
    newUsers[userIndex] = editedUser;
    setUsers(newUsers);
  }

  const handleEditClick = (id) => {
    setEditModeID(id);
  }

  return (
    <div>
      <Typography
        variant='h3'
      >
        Users
      </Typography>
      <br />

      <Grid container spacing={3}>
        {users.map((user) => 
          <User 
            user={user} 
            handleSave={handleUserSave}
            handleEditClick={handleEditClick}
            editModeID={editModeID}
          />)
        }
      </Grid>
      {users.map((user) => JSON.stringify(user))}
    </div>
  );
}

export default App;