import apiService from '../shared/fetch/apiService';

class PrestamosFacade {
    async obtenerPestamoPorUsername(username) {
        //!cambiar
        return await apiService.fetch(`/users?filters[username][$contains]=${username}`);
    }

    async fetchPost(query) {
        return await apiService.fetch(`/graphql`, {
            method: 'POST',
            // cache: 'no-store',
            body: JSON.stringify({ query }),
        });
    }
}

export default PrestamosFacade;
