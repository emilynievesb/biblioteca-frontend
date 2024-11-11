class Editorial {
    nombre;
    nacionalidad;

    constructor() {      
        this.queryFetchAll = `
            query {
                editorials {
                    data {
                        id
                        attributes {
                            nombre
                            nacionalidad
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

export default Editorial;
