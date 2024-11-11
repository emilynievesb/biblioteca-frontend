class Autor {
    nombre;
    apellido;
    nacionalidad;
    libros;

    constructor() {      
        this.queryFetchAll = `
            query {
                autors {
                    data {
                        id
                        attributes {
                            nombre
                            apellido
                            nacionalidad
                            libros {
                                data {
                                    id
                                    attributes {
                                        titulo
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

export default Autor;
