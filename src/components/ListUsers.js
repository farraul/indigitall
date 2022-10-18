import { useState } from "react";
import ModalUpdateUser from "./ModalUpdatetUser";
import imagedelete from "../assets/images/delete.png";
import imageupdate from "..//assets/images/update.png";
import ModalDeleteUser from "./ModalDeleteUser";


const ListUsers = ({ users, setUsers }) => {

    const [modalEdit, setModalEdit] = useState(null);
    const [idUser, setIdUser] = useState(null);
    const [beforeDeleteUser, setBeforeDeleteUser] = useState(false);

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
                        <div className="list-users" key={index}>
                            <div className="list-users__group">
                                <div className="list-users__data"> {user.name} </div>
                                <div className="list-users__data"> {user.lastName} </div>
                                <div className="list-users__data"> {user.email} </div>
                                <div className="list-users__data"> {user.age} </div>
                            </div>
                            <div className="list-users__icons-actions">
                                <div className="list-users__edit" onClick={() => editUser(user.id)}><img className="list-users__delete__img" src={imageupdate} /></div>
                                <div className="list-users__delete" onClick={() => { setBeforeDeleteUser(true); setIdUser(user.id) }}>
                                    <img className="list-users__delete__img" src={imagedelete} /></div>
                            </div>
                        </div>
                    )
                })
            }

            <ModalDeleteUser
                users={users}
                setUsers={setUsers}
                idUser={idUser}
                beforeDeleteUser={beforeDeleteUser}
                setBeforeDeleteUser={setBeforeDeleteUser}
            />
            {modalEdit && <ModalUpdateUser users={users} setUsers={setUsers} id={idUser} setModalEdit={setModalEdit} setBeforeDeleteUser={setBeforeDeleteUser} beforeDeleteUser={beforeDeleteUser} />}
        </>
    )
}

export default ListUsers;