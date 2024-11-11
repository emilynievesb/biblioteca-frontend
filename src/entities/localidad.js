class Localidad {
    nombre;
    direccion;
    libro_localidads; 
    bibliotecarios;   

    constructor() {       
        this.queryFetchAll = `
            query {
                punto_trabajos {
                    data {
                        id
                        attributes {
                            nombre
                            direccion
                            libro_localidads {
                                data {
                                    id
                                    attributes {
                                        localidad
                                    }
                                }
                            }
                            bibliotecarios {
                                data {
                                    id
                                    attributes {
                                        nombre
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `;
    }

    buildQueryFetchAll() {
        return this.queryFetchAll;
    }
}

export default Localidad;
