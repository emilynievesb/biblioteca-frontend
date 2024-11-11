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
        this.tipo_rol = rol;
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
        return this.queryRegister.replace('{0}', `"${this.nomUsuario}"`).replace('{1}', `"${this.correoElectronico}"`);
    }

    buildQueryRegister() {
        return this.queryRegister
            .replace('{0}', `"${this.nomUsuario}"`)
            .replace('{1}', `"${this.correoElectronico}"`)
            .replace('{2}', `"${this.contrasena}"`)
            .replace('{3}', `"${this.nombres}"`)
            .replace('{4}', `"${this.apellidos}"`)
            .replace('{5}', `"${this.direccion}"`)
            .replace('{6}', `"${this.telefono}"`)
            .replace('{7}', `"${this.fechaNacimiento}"`)
            .replace('{8}', `"${this.tipo_rol}"`);
    }
    buildQueryLogin() {
        return this.queryLogin.replace('{0}', `"${this.correoElectronico}"`).replace('{1}', `"${this.contrasena}"`);
    }
}
export default User;
