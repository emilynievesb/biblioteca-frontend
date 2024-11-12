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
        this.queryRegister = `
            mutation {
        createLibro(
            data: {
            isbn:{0} #Tipo string
            titulo:{1},
            editorial: {2},         # Relación con la editorial por ID tipo Number
            idioma: {3},
            edicion: {4},
            categoria: {5},         # Relación con la categoría por ID tipo Number
            resumen: {6},
            autors: {7},           # Relación múltiple con autores, usar un array para IDs
            publishedAt:{8}
            }
        ) {
            data {
            id
            attributes {
                isbn
                titulo
                editorial {
                data {
                    id
                    attributes {
                    nombre
                    }
                }
                }
                idioma
                edicion
                categoria {
                data {
                    id
                    attributes {
                    nombre
                    }
                }
                }
                resumen
                autors {
                data {
                    id
                    attributes {
                    nombre
                    apellido
                    }
                }
                }
            }
            }
        }
    }

        `;

        this.queryFetchAll = `
            query {
            libros {
                data {
                id
                attributes {
                    isbn
                    titulo
                    idioma
                    edicion
                    resumen
                    editorial {
                    data {
                        id
                        attributes {
                        nombre
                        }
                    }
                    }
                    categoria {
                    data {
                        id
                        attributes {
                        nombre
                        }
                    }
                    }
                    autors {
                    data {
                        id
                        attributes {
                        nombre
                        apellido
                        }
                    }
                    }

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
            .replace('{5}', `${this.categoria}`)
            .replace('{6}', `"${this.resumen}"`)
            .replace('{7}', `${this.autors}`)
            .replace('{8}', `"${new Date().toISOString()}"`);
        // .replace('{8}', `"${this.libro_localidads}"`);
    }

    buildQueryFetchAll() {
        return this.queryFetchAll;
    }
}
export default Book;
