class User {
    nomUsuario;
    contrasena;
    nombres;
    apellidos;
    direccion;
    telefono;
    rol;
    correoElectronico;
    fechaNacimiento;

    constructor() {
        this.queryValidate = `
            query {
        usersPermissionsUsers(filters: { 
            or: [   
            { email: { eq: {0} } }, 
            { username: { eq: {1} } }
            ]
        }) {
            data {
            id
            attributes {
                email
                username
            }
            }
        }
        }
    
        `;
        this.queryRegister = `
        mutation {
        registerUser(
            username: {0}
            email: {1}
            password: {2}
            nombres: {3}
            apellidos: {4}
            direccion: {5}
            telefono: {6}
            fechaNacimiento: {7}
            tipo_rol: {8}
        ) {
            user {
            id
            username
            email
            }
            jwt
        }
        }

        `;
        this.queryLogin = `
          mutation {
            login(input: { identifier: {0}, password: {1} }) {
                jwt
                user {
                id
                username
                email
                }
            }
            }
        `;
    }

    setNomUsuario(nomUsuario) {
        this.nomUsuario = nomUsuario;
        return;
    }

    setContrasena(contrasena) {
        this.contrasena = contrasena;
        return;
    }

    setNombres(nombres) {
        this.nombres = nombres;
        return;
    }

    setApellidos(apellidos) {
        this.apellidos = apellidos;
        return;
    }

    setDireccion(direccion) {
        this.direccion = direccion;
        return;
    }

    setTelefono(telefono) {
        this.telefono = telefono;
        return;
    }

    setRol(rol) {
        this.rol = rol;
        return;
    }

    setCorreoElectronico(correoElectronico) {
        this.correoElectronico = correoElectronico;
        return;
    }

    setFechaNacimiento(fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
        return;
    }

    buildQueryValidate() {
        // Implementación del método build (vacío, según solicitado)
    }

    buildQueryRegister() {
        return this.queryRegister.replace('{0}', `"${this.username}"`).replace('{1}', `"${this.email}"`).replace('{2}', `"${this.email}"`);
    }
    buildQueryLogin() {
        return this.queryLogin.replace('{0}', `"${this.email}"`).replace('{1}', `"${this.password}"`);
    }
}

// SearchBuilder.js
class SearchBuilder {
    constructor() {
        this.query = {};
    }

    setAuthor(author) {
        this.query.author = author;
        return this;
    }

    setGenre(genre) {
        this.query.genre = genre;
        return this;
    }

    setAvailability(isAvailable) {
        this.query.isAvailable = isAvailable;
        return;
    }

    build() {
        return this.query;
    }
}

// Uso en Next.js
const searchQuery = new SearchBuilder().setAuthor('J.K. Rowling').setGenre('Fantasy').setAvailability(true).build();

// Llamada al backend Strapi
fetch('/api/books', {
    method: 'POST',
    body: JSON.stringify(searchQuery),
});
