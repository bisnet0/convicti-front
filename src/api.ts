import axios from 'axios';



// Configura o Axios com a URL base
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_APP_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Adiciona o token automaticamente ao cabeçalho, se disponível
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default apiClient;
