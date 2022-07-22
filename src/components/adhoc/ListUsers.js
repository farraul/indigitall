import { useEffect, useState } from "react";
import axios from "axios";
import ModalUpdateUser from "./ModalUpdatetUser";
import imagedelete from "../../assets/images/delete.png";
import imageupdate from "../../assets/images/update.png";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const ListUsers = ({ users, setUsers }) => {

    const [modalEdit, setModalEdit] = useState(null);
    const [idUser, setIdUser] = useState(null);
    const [beforeDeleteUser, setBeforeDeleteUser] = useState(false);

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
        'flex-direction': 'column',
        'justify-content': 'center',
        'align-items': 'center',
    };

    const deleteUser = (id) => {
        axios.delete(`http://localhost:9090/users/${id}`)
            .then(({ data, status }) => {
                console.log("response:", data)
                if (status === 200 && data === "Deleted") {

                    setUsers(users.filter(user => user.id !== id))

                    console.log("okii", users.filter(user => user.id !== id))
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const editUser = (id) => {
        setModalEdit(true)
        setIdUser(id)
    }

    return (
        <>
            <div className="list-users__titles">
                <div className="list-users__titles__data">
                    <div className="list-users__data"> Nombre </div>
                    <div className="list-users__data"> Apellidos </div>
                    <div className="list-users__data"> Email </div>
                    <div className="list-users__data"> Edad </div>
                </div>
                <div className="list-users__titles__actions">
                    <div className="list-users__actions"> Actualizar</div>
                    <div className="list-users__actions"> Eliminar </div>
                </div>
            </div>

            {
                users.map((user, index) => {

                    return (
                        <div className="list-users" key={"user-" + index}>
                            <div className="list-users__group">
                                <div className="list-users__data"> {user.name} </div>
                                <div className="list-users__data"> {user.lastName} </div>
                                <div className="list-users__data"> {user.email} </div>
                                <div className="list-users__data"> {user.age} </div>
                            </div>
                            <div className="list-users__icons-actions">
                                <div className="list-users__edit" onClick={() => editUser(user.id)}><img className="list-users__delete__img" src={imageupdate} /></div>
                                <div className="list-users__delete" onClick={() => { setBeforeDeleteUser(true); setIdUser(user.id) }}><img className="list-users__delete__img" src={imagedelete} /></div>
                            </div>
                        </div>
                    )
                })
            }

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
            {modalEdit && <ModalUpdateUser setModalEdit={setModalEdit} id={idUser} users={users} setUsers={setUsers} />}
        </>
    )
}


export default ListUsers;