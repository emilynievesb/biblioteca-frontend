class Editorial {
    nombre;
    nacionalidad;

    constructor() {
        this.queryCreate = `
            mutation {
                createEditorial(data: { nombre: "{0}", nacionalidad: "{1}" }) {
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
        
        this.queryUpdate = `
            mutation {
                updateEditorial(id: {0}, data: { nombre: "{1}", nacionalidad: "{2}" }) {
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
        
        this.queryDelete = `
            mutation {
                deleteEditorial(id: {0}) {
                    data {
                        id
                    }
                }
            }
        `;
        
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
