import { useEffect, useState } from "react";
import axios from "axios";
import ModalUpdateUser from "./modalupdatetuser";
import imagedelete from "../../assets/images/delete.png"
import imageupdate from "../../assets/images/update.png"

const ListUsers = () => {

    const [users, setUsers] = useState(null);
    const [modalEdit, setModalEdit] = useState(null);
    const [idEdit, setIdEdit] = useState(null);

    useEffect(() => {
        axios.get( 'http://localhost:9090/users' )
            .then((response) => {
                setUsers(response)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])


    const deleteUser = (id) => {
        axios.delete( `http://localhost:9090/users/${id}` )
            .then((response) => {
                console.log("response:", response)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const editUser = (id) => {
        setModalEdit(true)
        setIdEdit(id)
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

            {users &&
                users.data.map((element, index) => {

                    return (
                        <div className="list-users" key={index}>
                            <div className="list-users__group">
                                <div className="list-users__data"> {element.name} </div>
                                <div className="list-users__data"> {element.lastName} </div>
                                <div className="list-users__data"> {element.email} </div>
                                <div className="list-users__data"> {element.age} </div>
                            </div>
                            <div className="list-users__icons-actions">
                            <div className="list-users__edit" onClick={() => editUser(element.id)}><img className="list-users__delete__img" src={imageupdate} /></div>
                            <div className="list-users__delete" onClick={() => deleteUser(element.id)}><img className="list-users__delete__img" src={imagedelete} /></div>
                            </div>
                        </div>
                    )
                })
            }
            {modalEdit && <ModalUpdateUser setModalEdit={setModalEdit} id={idEdit} />}
        </>
    )
}


export default ListUsers;