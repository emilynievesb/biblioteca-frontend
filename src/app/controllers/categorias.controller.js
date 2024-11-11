import Categoria from '@/entities/categoria';
import CategoriaFacade from '@/services/categoria.facade';

const searchCategorias = async () => {
    const categorias = new Categoria();
    const queryCategorias = categorias.buildQueryFetchAll();
    const categoriaFacade = new CategoriaFacade();
    return await categoriaFacade.fetchPost(queryCategorias);
};

export { searchCategorias };
