import Book from '@/entities/book';
import BooksFacade from '@/services/books.facade';

const registerBook = async (data) => {
    const { isbn, titulo, editorial, idioma, edicion, categoria, resumen, autors } = data;
    const book = new Book();
    book.setIsbn(isbn);
    book.setTitulo(titulo);
    book.setEditorial(editorial);
    book.setIdioma(idioma);
    book.setEdicion(edicion);
    book.setCategoria(categoria);
    book.setResumen(resumen);
    book.setAutors(autors);
    const queryBooks = book.buildQueryRegister();
    const bookFacade = new BooksFacade();
    return await bookFacade.fetchPost(queryBooks);
};
const searchBooks = async () => {
    const bookFacade = new BooksFacade();
    return await bookFacade.obtenerLibros(queryBooks);
};
export { searchBooks, registerBook };
