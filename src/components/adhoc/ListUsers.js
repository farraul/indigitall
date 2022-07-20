import { useEffect, useState } from "react";
import axios from "axios";
import ModalEditUser from "./modaledituser";

const ListUsers = () => {

    const [users, setUsers] = useState(null);
    const [modalEdit, setModalEdit] = useState(null);


    useEffect(() => {
        axios.get('http://localhost:9090/users')
            .then((response) => {
                setUsers(response)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    const edituser = (id) => {
        //axios.put(`http://localhost:9090/users/${id}`,{name:'raul999j'})
        setModalEdit(true)

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
                            <div className="list-users__edit" onClick={() => edituser(element.id)}> edit</div>
                            <div className="list-users__delete"> delete</div>
                        </div>
                    )
                })

            }

            {modalEdit&&<ModalEditUser modalEdit={modalEdit} setModalEdit={setModalEdit} />}
        </>
    )
}


export default ListUsers;