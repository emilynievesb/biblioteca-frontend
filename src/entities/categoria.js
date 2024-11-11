class Categoria {
    nombre;

    constructor() {
        this.queryCreate = `
            mutation {
                createCategoria(data: { nombre: "{0}" }) {
                    data {
                        id
                        attributes {
                            nombre
                        }
                    }
                }
            }
        `;
        
        this.queryUpdate = `
            mutation {
                updateCategoria(id: {0}, data: { nombre: "{1}" }) {
                    data {
                        id
                        attributes {
                            nombre
                        }
                    }
                }
            }
        `;
        
        this.queryDelete = `
            mutation {
                deleteCategoria(id: {0}) {
                    data {
                        id
                    }
                }
            }
        `;
        
        this.queryFetchAll = `
            query {
                categorias {
                    data {
                        id
                        attributes {
                            nombre
                        }
                    }
                }
            }
        `;
    }

    setNombre(nombre) {
        this.nombre = nombre;
        return this;
    }

    buildQueryCreate() {
        return this.queryCreate.replace("{0}", this.nombre);
    }

    buildQueryUpdate(id) {
        return this.queryUpdate.replace("{0}", id).replace("{1}", this.nombre);
    }

    buildQueryDelete(id) {
        return this.queryDelete.replace("{0}", id);
    }

    buildQueryFetchAll() {
        return this.queryFetchAll;
    }
}

export default Categoria;
