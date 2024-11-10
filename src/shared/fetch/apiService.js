// !! PATRON SINGLETON
class ApiService {
    constructor(baseURL) {
        if (ApiService.instance) {
            return ApiService.instance;
        }

        this.baseURL = baseURL;
        ApiService.instance = this;
    }

    async fetch(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;

        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const finalOptions = { ...defaultOptions, ...options };

        try {
            const response = await fetch(url, finalOptions);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }

    getToken() {
        // Obtiene el token de autenticación de algún almacenamiento seguro
        return localStorage.getItem('authToken') || '';
    }
}

// Crear una única instancia de ApiService con la URL base de Strapi
const apiService = new ApiService(process.env.API_URL);
Object.freeze(apiService); // Asegura que la instancia sea inmutable

export default apiService;
