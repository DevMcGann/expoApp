import axios from 'axios'

const clienteAxios = axios.create({
    baseURL : 'https://festapi.herokuapp.com'   //cambiar por la api
});

export default clienteAxios;