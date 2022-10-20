import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from "axios";
import { useState } from "react";
import { deleteUsers } from '../services/api';




const ModalDeleteUser = ({
    users,
    setUsers,
    idUser,
    beforeDeleteUser,
    setBeforeDeleteUser
}) => {

    const style = {
        position: 'absolute',
        display: 'flex',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const deleteUser = async (id) => {
        let { status, data } = await deleteUsers(id)
        if (status === 200 && data === "Deleted") {
            setUsers(users.filter(user => user.id !== id))
        }
    }



    return (
        <>
            <Modal
                open={beforeDeleteUser}
                onClose={() => setBeforeDeleteUser(false)}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400, height: 200, }}>
                    <h2 id="parent-modal-title" className="list-users__pop-up-delete-title">Desea eliminar el usuario</h2>
                    <div className="list-users__pop-up-buttons">
                        <button className="list-users__pop-up-delete-button__delete" onClick={() => { deleteUser(idUser); setBeforeDeleteUser(false) }}>Eliminar</button>
                        <button className="list-users__pop-up-delete-button__cancel" onClick={() => setBeforeDeleteUser(false)}>Cancelar</button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}


export default ModalDeleteUser;