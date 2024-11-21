import Book from '@/entities/book';
import Prestamo from '@/entities/prestamo';
import BooksFacade from '@/services/books.facade';
import PrestamosFacade from '@/services/prestamo.facade';

const registerPrestamo = async (data) => {
    const { id_libro, id_usuario, fecha_pac_dev, valor_pactado_dia } = data;
    const prestamo = new Prestamo();
    prestamo.setLibro(id_libro);
    prestamo.setIdUser(id_usuario);
    prestamo.setFechaPacDev(fecha_pac_dev);
    prestamo.setValorPactadoDia(valor_pactado_dia);
    const queryPrestamo = prestamo.buildQueryCreate();
    const prestamoFacade = new PrestamosFacade();
    console.log(queryPrestamo)
    return await prestamoFacade.fetchPost(queryPrestamo);
};
const searchBooks = async () => {
    const book = new Book();
    const queryBooks = book.buildQueryFetchAll();
    const bookFacade = new BooksFacade();
    return await bookFacade.fetchPost(queryBooks);
};
export { searchBooks, registerPrestamo };
