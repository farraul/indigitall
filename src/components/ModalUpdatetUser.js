import { useEffect, useState } from "react";
import * as React from 'react';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import { updateUsers } from "../services/api";

const ModalEditUser = ({ setModalEdit, id, users, setUsers }) => {

    let userEdit = users.filter((user) => user.id === id);
    const [userData, setUserData] = useState(userEdit[0])

    const updateUser = async () => {
        let { data }= await updateUsers(id, userData)
        setUsers(users.map((user) => user.id === data.id ? data : user));
        setModalEdit(false)
    }

    return (
        <>

            <div className="modal-edit-user">
                <div onClick={() => { setModalEdit(false) }}>x</div>
                <div className="modal-edit-user__box">

                    <div className="modal-create-user__close" onClick={() => { setModalEdit(false) }}>x</div>
                    <div> Escribe los campos que quieras modificar</div>

                    <div className="modal-edit-user__input">
                        <TextField
                            id="filled-basic"
                            label="Nombre"
                            value={userData.name}
                            variant="filled"
                            fullWidth
                            onChange={(e) => { setUserData({ ...userData, name: e.target.value }) }}
                        />
                    </div>
                    <div className="modal-edit-user__input">
                        <TextField
                            id="filled-basic"
                            label="Apellidos"
                            value={userData.lastName}
                            variant="filled"
                            fullWidth
                            onChange={(e) => { setUserData({ ...userData, lastName: e.target.value }) }}
                        />
                    </div>
                    <div className="modal-edit-user__input">
                        <TextField
                            id="filled-basic"
                            label="Email"
                            variant="filled"
                            value={userData.email}
                            fullWidth
                            onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }}
                        />
                    </div>
                    <div className="modal-edit-user__input">
                        <TextField
                            id="filled-basic"
                            label="Edad"
                            value={userData.age}
                            variant="filled"
                            fullWidth
                            onChange={(e) => { setUserData({ ...userData, age: e.target.value }) }}
                        />
                    </div>

                    <div className="modal-create-user__button">
                        <Button variant="contained" fullWidth onClick={() => updateUser()} >Modificar usuario</Button>
                    </div>
                </div>
            </div>
        </>
    )


}

export default ModalEditUser;