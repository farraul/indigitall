
import { useEffect, useState } from "react";
import * as React from 'react';
import axios from "axios";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

//import { Value } from "sass";



const ModalCreateUser = ({ modalCreateUser, setModalCreateUser }) => {

    let data = {
        name: null,
        lastname: null,
        email: null,
        age: null
    }

    const sendData = () => {
        axios.post('http://localhost:9090/users', {
            name: 'kkkk',
            lastName: 'd',
            email: 'r@gmail.com',
            age: 3
        })
            .then((response) => {
                console.log("response:",response)
            })
            .catch((error) => {
                console.log(error);
            });

        setModalCreateUser(!modalCreateUser)
    }


    return (
        <>
            <div className="modal-create-user">
                <div className="modal-create-user__box">

                    <div className="modal-create-user__close" onClick={() => { setModalCreateUser(!modalCreateUser) }}>x</div>
                    <div> Crear Usuario</div>

                    <div className="modal-create-user__input">
                        <TextField
                            id="filled-basic"
                            label="Nombre"
                            variant="filled"
                            fullWidth
                        />
                    </div>
                    <div className="modal-create-user__input">
                        <TextField
                            id="filled-basic"
                            label="Apellidos"
                            variant="filled"
                            fullWidth
                        />
                    </div>
                    <div className="modal-create-user__input">
                        <TextField
                            id="filled-basic"
                            label="Email"
                            variant="filled"
                            fullWidth
                        />
                    </div>
                    <div className="modal-create-user__input">
                        <TextField
                            id="filled-basic"
                            label="Edad"
                            variant="filled"
                            fullWidth
                        />
                    </div>
                    <div className="modal-create-user__button">
                        <Button variant="contained" fullWidth onClick={() => sendData()}>Contained</Button>
                    </div>
                </div>
            </div>

        </>
    )


}

export default ModalCreateUser;