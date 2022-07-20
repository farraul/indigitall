
import { useEffect, useState } from "react";
import * as React from 'react';
import axios from "axios";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

//import { Value } from "sass";


const ModalCreateUser = ({ modalCreateUser, setModalCreateUser }) => {

    const [data, setData] = useState({
        name: "",
        lastName: "",
        email: "",
        age: null
    }
    )
    const sendData = () => {
        axios.post('http://localhost:9090/users', data)
            .then((response) => {
                console.log("response:", response)
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

                    <div className="modal-create-user__input">
                        <TextField
                            id="filled-basic"
                            label="Nombre"
                            variant="filled"
                            fullWidth
                            onChange={(e) => { setData({ ...data, name: e.target.value }) }}

                        />
                    </div>
                    <div className="modal-create-user__input">
                        <TextField
                            id="filled-basic"
                            label="Apellidos"
                            variant="filled"
                            fullWidth
                            onChange={(e) => { setData({ ...data, lastName: e.target.value }) }}
                        />
                    </div>
                    <div className="modal-create-user__input">
                        <TextField
                            id="filled-basic"
                            label="Email"
                            variant="filled"
                            fullWidth
                            onChange={(e) => { setData({ ...data, email: e.target.value }) }}

                        />
                    </div>
                    <div className="modal-create-user__input">
                        <TextField
                            id="filled-basic"
                            label="Edad"
                            variant="filled"
                            fullWidth
                            onChange={(e) => { setData({ ...data, age: e.target.value }) }}
                        />
                    </div>
                    <div className="modal-create-user__button">
                        <Button variant="contained" fullWidth onClick={() => sendData()}>Crear usuario</Button>
                    </div>
                </div>
            </div>

        </>
    )


}

export default ModalCreateUser;