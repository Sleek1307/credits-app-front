import axios from 'axios';

const headers = {'Content-Type': "application/json"};

const login = (data) =>{
    return axios.post(`http://localhost:3001/api/${data.rol}/login`, JSON.stringify(data), {headers, })
}

const get = (data) =>{
    const headers = {
        Authorization: localStorage.token,
        "Content-Type": "application/json; charset=utf-8",
    };
    return axios.get(`http://localhost:3001/api/${data}/get`, {headers, })
}

export { login, get };