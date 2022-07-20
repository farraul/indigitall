import { useEffect, useState } from "react";
import * as React from 'react';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";








const ModalEditUser = ({ modalEdit, setModalEdit }) => {

    return (
        <>

            <div className="modal-edit-user">
                <div onClick={() => { setModalEdit(!modalEdit) }}>xxx</div>



                <div className="modal-edit-user__box">

                    <div className="modal-create-user__close" onClick={() => { setModalEdit(!modalEdit) }}>x</div>
                    <div> Borrar</div>

                    <div>
                        <TextField id="filled-basic" label="Nombre" variant="filled" />
                    </div>
                    <div>
                        <Button variant="contained" color="success">Contained</Button>
                    </div>
                </div>
                HOLA
            </div>

        </>
    )


}

export default ModalEditUser;