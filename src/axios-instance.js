import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.6:3001', // Substitua com a baseURL do seu servidor
    timeout: 10000, // Tempo limite da requisição (opcional)
    headers: {
        'Content-Type': 'application/json'
        // Outros headers personalizados, se necessário
    }
})

export default api
