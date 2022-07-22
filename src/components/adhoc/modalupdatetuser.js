import { useEffect, useState } from "react";
import * as React from 'react';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";


const ModalEditUser = ({ setModalEdit, id, users, setUsers,  }) => {

    const [data, setData] = useState({
        name: "",
        lastName: "",
        email: "",
        age: null
    })

    const sendData = () => {
        axios.put(`http://localhost:9090/users/${id}`, data)
            .then(({data}) => {
                setUsers([...users, data]);
            })
            .catch((error) => {
                console.log(error);
            });

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
                            variant="filled"
                            fullWidth
                            onChange={(e) => { setData({ ...data, name: e.target.value }) }}

                        />
                    </div>
                    <div className="modal-edit-user__input">
                        <TextField
                            id="filled-basic"
                            label="Apellidos"
                            variant="filled"
                            fullWidth
                            onChange={(e) => { setData({ ...data, lastName: e.target.value }) }}
                        />
                    </div>
                    <div className="modal-edit-user__input">
                        <TextField
                            id="filled-basic"
                            label="Email"
                            variant="filled"
                            fullWidth
                            onChange={(e) => { setData({ ...data, email: e.target.value }) }}

                        />
                    </div>
                    <div className="modal-edit-user__input">
                        <TextField
                            id="filled-basic"
                            label="Edad"
                            variant="filled"
                            fullWidth
                            onChange={(e) => { setData({ ...data, age: e.target.value }) }}
                        />
                    </div>

                    <div className="modal-create-user__button">
                        <Button variant="contained" fullWidth onClick={() => sendData(id)} >Modificar usuario</Button>
                    </div>
                </div>
                HOLA
            </div>

        </>
    )


}

export default ModalEditUser;