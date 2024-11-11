import Autor from '@/entities/autor';
import AutorsFacade from '@/services/autor.facade';

const searchAutors = async () => {
    const autors = new Autor();
    const queryAutors = autors.buildQueryFetchAll();
    const autorFacade = new AutorsFacade();
    return await autorFacade.fetchPost(queryAutors);
};

export { searchAutors };
