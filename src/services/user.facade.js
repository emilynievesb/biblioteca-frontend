import apiService from '../shared/fetch/apiService';

class UsersFacade {
    async obtenerUsuarioPorUsername(username) {
        return await apiService.fetch(`/users?filters[username][$contains]=${username}`);
    }

    async validarUsuario(query) {
        return await apiService.fetch(`/graphql`, {
            method: 'POST',
            body: JSON.stringify(query),
        });
    }

    async registrarUsuario(query) {
        return await apiService.fetch('/graphql', {
            method: 'POST',
            body: JSON.stringify(query),
        });
    }
    async loginUsuario(query) {
        return await apiService.fetch('/graphql', {
            method: 'POST',
            body: JSON.stringify(query),
        });
    }
}

// Exporta una instancia única (Singleton) de LibraryFacade para su uso en toda la aplicación

export default UsersFacade;
