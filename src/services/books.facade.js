import apiService from '../shared/fetch/apiService';

class BooksFacade {
    async obtenerLibros() {
        return await apiService.fetch(`/api/libros/`);
    }

    async fetchPost(query) {
        return await apiService.fetch(`/graphql`, {
            method: 'POST',
            // cache: 'no-store',
            body: JSON.stringify({ query }),
        });
    }
}

export default BooksFacade;
