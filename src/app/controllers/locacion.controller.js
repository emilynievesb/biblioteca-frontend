import Localidad from '@/entities/localidad';
import LocationsFacade from '@/services/locacion.facade';

const searchLocalidad = async () => {
    const localidad = new Localidad();
    const queryLocalidad = localidad.buildQueryFetchAll();
    const localidadFacade = new LocationsFacade();
    return await localidadFacade.fetchPost(queryLocalidad);
};

export { searchLocalidad };
