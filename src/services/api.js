import axios from "axios";
//import { getEnvVariable } from "./utils/environment";
//import { REACT_APP_API_URL } from "./utils/environment";

const REACT_APP_API_URL = 'http://localhost:9090';



/*const API_URL = getEnvVariable(REACT_APP_API_URL)*/

const getUsers = () => {
  return axios.get(`${REACT_APP_API_URL}/users`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error);
    });
}



const postUsers = (data) => {
  return axios.post(`${REACT_APP_API_URL}/users`, data)
    .then(({ data }) => {
      console.log("return data", data)
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}


const deleteUsers = (id) => {
  return axios.delete(`${REACT_APP_API_URL}/users/${id}`)
    .then(({ data, status }) => {
      if (status === 200 && data === "Deleted") {
        return { data, status }
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

const updateUsers = (id, userData) => {


  return axios.put(`http://localhost:9090/users/${id}`, userData)
    .then(({ data, status }) => {
      if (status === 200) {
        return { data, status }
      }
    })
    .catch((error) => {
      console.log(error);
    });

}


export { getUsers, postUsers, deleteUsers, updateUsers }