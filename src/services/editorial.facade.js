import apiService from '../shared/fetch/apiService';

class EditorialsFacade {
    async fetchPost(query) {
        return await apiService.fetch(`/graphql`, {
            method: 'POST',
            // cache: 'no-store',
            body: JSON.stringify({ query }),
        });
    }
}

export default EditorialsFacade;
