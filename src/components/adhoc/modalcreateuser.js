
import { useEffect, useState } from "react";
import * as React from 'react';
import axios from "axios";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import isEmtpyNull from "../../constants/isEmptyNull";


const ModalCreateUser = ({ modalCreateUser, setModalCreateUser, users, setUsers }) => {

    const [data, setData] = useState({
        name: "",
        lastName: "",
        email: "",
        age: null
    })

    const sendData = () => {

        console.log( data );

        if (
            ! isEmtpyNull( data.name ) &&
            ! isEmtpyNull( data.lastName ) &&
            ! isEmtpyNull( data.email ) &&
            ! isEmtpyNull( data.age )
        ) {

            axios.post('http://localhost:9090/users', data)
        
            .then(({ data }) => {
                setUsers([...users, data]);

                console.log("response:", data)
            })
            .catch((error) => {
                console.log(error);
            });

            setModalCreateUser(!modalCreateUser)

        }

    }


    return (
        <>
            <div className="modal-create-user">
                <div className="modal-create-user__box">

                    <div className="modal-create-user__close" onClick={() => { setModalCreateUser(!modalCreateUser) }}>x</div>

                    <div className="modal-create-user__input">
                        <TextField
                            required
                            error={isEmtpyNull( data.name )}
                            id="filled-basic"
                            label="Nombre"
                            helperText={isEmtpyNull( data.name ) && "El nombre es requerido"}
                            variant="filled"
                            fullWidth
                            onChange={(e) => { setData({ ...data, name: e.target.value }) }}

                        />
                    </div>
                    <div className="modal-create-user__input">
                        <TextField
                            id="filled-basic"
                            error={isEmtpyNull( data.lastName )}
                            helperText={isEmtpyNull( data.lastName ) ? "El apellido es requerido" : ""}
                            label="Apellidos"
                            variant="filled"
                            fullWidth
                            onChange={(e) => { setData({ ...data, lastName: e.target.value }) }}
                        />
                    </div>
                    <div className="modal-create-user__input">
                        <TextField
                            id="filled-basic"
                            error={isEmtpyNull( data.email )}
                            helperText={isEmtpyNull( data.email ) ? "El email es requerido" : ""}
                            label="Email"
                            variant="filled"
                            fullWidth
                            onChange={(e) => { setData({ ...data, email: e.target.value }) }}

                        />
                    </div>
                    <div className="modal-create-user__input">
                        <TextField
                            id="filled-basic"
                            error={isEmtpyNull( data.age )}
                            helperText={isEmtpyNull( data.age ) ? "La edad es requerida" : ""}
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