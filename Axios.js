import axios from 'axios'

const clienteAxios = axios.create({
    baseURL : 'http://192.168.1.106:5000'   //cambiar por la api
});

export default clienteAxios;