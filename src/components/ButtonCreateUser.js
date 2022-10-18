
import { useState } from "react";
import React, { Component } from 'react';
import ModalCreateUser from "./ModalCreateUser";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
 
const ButtonCreateUser = ({users, setUsers}) => {
    const [modalCreateUser, setModalCreateUser] = useState(false);
    return (
        <>
            <Button onClick={() => { setModalCreateUser(true) }} variant="fab" color="primary" aria-label="Add" style={{ width: 35, height: 30 }}>
                <AddIcon />
            </Button>
           {modalCreateUser && <ModalCreateUser setModalCreateUser={setModalCreateUser} modalCreateUser={modalCreateUser} users={users} setUsers={setUsers} /> }
        </>
    )
}

export default ButtonCreateUser;