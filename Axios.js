import axios from 'axios'

const clienteAxios = axios.create({
    baseURL : 'http://localhost:5000'   //cambiar por la api
});

export default clienteAxios;