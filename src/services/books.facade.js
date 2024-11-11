import apiService from '../shared/fetch/apiService';

class BooksFacade {
    async buscarLibros(filtros) {
        // Construye la consulta de búsqueda usando SearchBuilder
        const query = new SearchBuilder().setAuthor(filtros.author).setGenre(filtros.genre).setAvailability(filtros.isAvailable).build();

        return await apiService.fetch('/books', {
            method: 'POST',
            body: JSON.stringify(query),
        });
    }

    async obtenerLibroPorId(id) {
        return await apiService.fetch(`/books/${id}`);
    }

    async actualizarLibro(id, data) {
        return await apiService.fetch(`/books/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    async agregarLibro(data) {
        return await apiService.fetch('/books', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async eliminarLibro(id) {
        return await apiService.fetch(`/books/${id}`, {
            method: 'DELETE',
        });
    }
}

// Exporta una instancia única (Singleton) de LibraryFacade para su uso en toda la aplicación
const booksFacade = new BooksFacade();
Object.freeze(booksFacade);
export default booksFacade;
