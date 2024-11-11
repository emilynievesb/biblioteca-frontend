class Book {
    isbn;
    titulo;
    editorial;
    idioma;
    edicion;
    categoria;
    resumen;
    autors;
    libro_localidads;

    constructor() {
        this.queryRegister = `mutation {
            createLibro(input: {
                data: {
                isbn: {0},
                titulo: {1},
                editorial: {
                    connect: {
                    id: {2}
                    }
                },
                idioma: {3},
                edicion: {4},
                categoria: {
                    connect: {
                    id: {5}
                    }
                },
                resumen: {6},
                autors: {
                    connect: {7} //[ {id: "1"}, {id: "2"} ]
                },
                }
            }) {
                data {
                id
                isbn
                titulo
                editorial {
                    id
                    name
                }
                idioma
                edicion
                categoria {
                    id
                    name
                }
                resumen
                autors {
                    id
                    name
                }
                }
            }
            }
        `;

        this.queryFetchAll = `
        query{
            libro{
                data{
                    isbn
                    titulo
                    editorial
                    idioma
                    edicion
                    categoria
                    resumen
                    autors{
                        id
                        name
                    }
                    libro_localidads {
                        id
                        location
                    }   
                }
            }
        }
        `;
    }

    setIsbn(isbn) {
        this.isbn = isbn;
        return;
    }

    setTitulo(titulo) {
        this.titulo = titulo;
        return;
    }

    setEditorial(editorial) {
        this.editorial = editorial;
        return;
    }

    setIdioma(idioma) {
        this.idioma = idioma;
        return;
    }

    setEdicion(edicion) {
        this.edicion = edicion;
        return;
    }

    setCategoria(categoria) {
        this.categoria = categoria;
        return;
    }

    setResumen(resumen) {
        this.resumen = resumen;
        return;
    }

    setAutors(autors) {
        this.autors = autors;
        return;
    }

    buildQueryRegister() {
        return this.queryRegister
            .replace('{0}', `"${this.isbn}"`)
            .replace('{1}', `"${this.titulo}"`)
            .replace('{2}', `"${this.editorial}"`)
            .replace('{3}', `"${this.idioma}"`)
            .replace('{4}', `"${this.edicion}"`)
            .replace('{5}', `"${this.categoria}"`)
            .replace('{6}', `"${this.resumen}"`)
            .replace('{7}', `"${this.autors}"`);
        // .replace('{8}', `"${this.libro_localidads}"`);
    }

    buildQueryFetchAll() {
        return this.queryFetchAll;
    }
}
export default Book;
