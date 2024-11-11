import apiService from '../shared/fetch/apiService';

class UsersFacade {
    async obtenerUsuarioPorUsername(username) {
        return await apiService.fetch(`/users?filters[username][$contains]=${username}`);
    }

    async validarUsuario(data) {
        return await apiService.fetch(`/graphql`, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async registrarUsuario(data) {
        return await apiService.fetch('/graphql', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }
    async loginUsuario(data) {
        return await apiService.fetch('/graphql', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }
}

// Exporta una instancia única (Singleton) de LibraryFacade para su uso en toda la aplicación
const usersFacade = new UsersFacade();
Object.freeze(usersFacade);
export default usersFacade;
