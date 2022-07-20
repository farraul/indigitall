import { useEffect, useState } from "react";
import axios from "axios";
import ModalEditUser from "./modaledituser";
import imagedelete from "../../assets/images/delete.png"
import imageupdate from "../../assets/images/update.png"

const ListUsers = () => {

    const [users, setUsers] = useState(null);
    const [modalEdit, setModalEdit] = useState(null);
    const [idEdit, setIdEdit] = useState(null);



    useEffect(() => {
        axios.get('http://localhost:9090/users')
            .then((response) => {
                setUsers(response)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])


    const deleteUser = (id) => {
        axios.delete(`http://localhost:9090/users/${id}`)
            .then((response) => {
                console.log("response:", response)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const editUser= (id) =>{
        setModalEdit(true)
        setIdEdit(id)
    }

    return (
        <>

            {users &&

                users.data.map((element, index) => {
                    let dataprint = null;
                    // console.log("element", element)

                    return (
                        <div className="list-users" key={index}>
                            <div className="list-users__data"> {element.name} </div>
                            <div className="list-users__data"> {element.lastName} </div>
                            <div className="list-users__data"> {element.email} </div>
                            <div className="list-users__data"> {element.age} </div>

                            <div className="list-users__edit" onClick={() => editUser(element.id) }><img className="list-users__delete__img" src={imageupdate} /></div>
                            <div className="list-users__delete" onClick={() => deleteUser(element.id)}><img className="list-users__delete__img" src={imagedelete} /></div>
                        </div>
                    )
                })

            }

            {modalEdit && <ModalEditUser modalEdit={modalEdit} setModalEdit={setModalEdit} id={idEdit} />}
        </>
    )
}


export default ListUsers;