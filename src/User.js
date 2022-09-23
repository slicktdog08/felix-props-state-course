import React, { useState } from 'react';
import {
    Typography,
    Grid,
    Card,
    CardContent,
    CardActions,
    Avatar,
    Button,
    TextField,
} from '@mui/material';


const User = (props) => {

    const { 
        user, handleSave, handleEditClick: handleEdit,
        editModeID
    } = props;

    const editMode = user.id === editModeID;

    const handleEditClick = () => {
        handleEdit(user.id)
    }


    const [localUser, setLocalUser] = useState(user);

    const {
        firstName,
        lastName,
        age,
        favColor
    } = localUser;

    const handleInputEdit = (event) => {
        const inputName = event.target.id;
        const newValue = event.target.value;

        const newLocalUser = {...localUser};
        newLocalUser[inputName] = newValue;
        setLocalUser(newLocalUser);
    }

    const handleLocalSave = () => {
        handleSave(localUser);
        handleEdit(null)
    }

    return (
        <Grid item md={4}>
            <Card>
                <CardContent>
                    {!editMode && (
                        <Typography color='primary'>
                            First Name: {firstName}
                        </Typography>
                    )}
                    {editMode && (
                        <TextField 
                            placeholder='Enter your first name'
                            label='First Name'
                            fullWidth
                            value={firstName}
                            onChange={handleInputEdit}
                            id='firstName'
                        />
                    )}
                     {!editMode && (
                        <Typography color='primary'>
                            Last Name: {lastName}
                        </Typography>
                    )}
                    {editMode && (
                        <TextField 
                            placeholder='Enter your last name'
                            label='Last Name'
                            fullWidth
                            value={lastName}
                            onChange={handleInputEdit}
                            id='lastName'
                        />
                    )}
                    {!editMode && (
                        <Typography color='primary'>
                            Age: {age}
                        </Typography>
                    )}
                    {editMode && (
                        <TextField
                            type='number'
                            placeholder='Enter your age'
                            label='Age'
                            fullWidth
                            value={age}
                            onChange={handleInputEdit}
                            id='age'
                        />
                    )}
                    {!editMode && (
                        <Typography color='primary'>
                            Favorite Color: {favColor}
                        </Typography>
                    )}
                    {editMode && (
                        <TextField
                            placeholder='Enter your favorite color'
                            label='Favorite Color'
                            fullWidth
                            value={favColor}
                            onChange={handleInputEdit}
                            id='favColor'
                        />
                    )}
                </CardContent>
                <CardActions>
                    <Button color='secondary' onClick={handleEditClick}>
                        {editMode ? 'Cancel' : 'Edit'}
                    </Button>
                    {editMode && (
                        <Button color='secondary' onClick={handleLocalSave}>
                            Save
                        </Button>
                    )}
                </CardActions>
            </Card>
        </Grid>
    )
}

export default User;