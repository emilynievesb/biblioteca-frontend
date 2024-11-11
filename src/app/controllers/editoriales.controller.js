import Editorial from '@/entities/editorial';
import EditorialsFacade from '@/services/editorial.facade';

const searchEditoriales = async () => {
    const editoriales = new Editorial();
    const queryEditoriales = editoriales.buildQueryFetchAll();
    const editorialFacade = new EditorialsFacade();
    return await editorialFacade.fetchPost(queryEditoriales);
};

export { searchEditoriales };
