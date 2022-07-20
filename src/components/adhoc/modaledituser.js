import { useEffect, useState } from "react";
import * as React from 'react';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";


const ModalEditUser = ({ modalEdit, setModalEdit, id }) => {

    const [data, setData] = useState({
        name: "",
        lastName: "",
        email: "",
        age: null
    })

     const sendData = () => {
        axios.put(`http://localhost:9090/users/${id}`, data)
            .then((response) => {
                console.log("response:", response)
            })
            .catch((error) => {
                console.log(error);
            });

    }


    return (
        <>

            <div className="modal-edit-user">
                <div onClick={() => { setModalEdit(!modalEdit) }}>xxx</div>



                <div className="modal-edit-user__box">

                    <div className="modal-create-user__close" onClick={() => { setModalEdit(!modalEdit) }}>x</div>
                    <div> Modifica los campos que quieras</div>

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
                        <Button variant="contained" fullWidth  onClick={() => sendData(id)} >Modificar usuario</Button>
                    </div>
                </div>
                HOLA
            </div>

        </>
    )


}

export default ModalEditUser;