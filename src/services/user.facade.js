import apiService from '../shared/fetch/apiService';

class UsersFacade {
    async obtenerUsuarioPorUsername(username) {
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

export default UsersFacade;
