class User {
    id;
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
        register(
        input:{
            username: {0}
            email: {1}
            password: {2}
    }) {
            user {
            id
            username
            email
            }
            jwt
        }
        }
        `;
        this.queryRegisterUsuario = `
        mutation {
    createUsuario(
        data: {
            nombres: {0}
            apellidos: {1}
            direccion: {2}
            telefono: {3}
            fechaNacimiento: {4}
            tipo_rol: {5}
            user_id:{6}
            publishedAt:{7}
        }
    ) {
        data {
        id
        attributes {
            nombres
            apellidos
            telefono
            user_id {
            data {
                id
                attributes {
                username
                email
                }
            }
            }
        }
        }
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

    setId(id) {
        this.id = id;
        return;
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
        return this.queryValidate.replace('{0}', `"${this.correoElectronico}"`).replace('{1}', `"${this.nomUsuario}"`);
    }

    buildQueryRegister() {
        return this.queryRegister.replace('{0}', `"${this.nomUsuario}"`).replace('{1}', `"${this.correoElectronico}"`).replace('{2}', `"${this.contrasena}"`);
    }
    buildQueryRegisterUser() {
        return this.queryRegisterUsuario
            .replace('{0}', `"${this.nombres}"`)
            .replace('{1}', `"${this.apellidos}"`)
            .replace('{2}', `"${this.direccion}"`)
            .replace('{3}', `"${this.telefono}"`)
            .replace('{4}', `"${this.fechaNacimiento}"`)
            .replace('{5}', `"${this.tipo_rol}"`)
            .replace('{6}', `"${this.id}"`)
            .replace('{7}', `"${new Date().toISOString().split('T')[0]}"`);
    }
    buildQueryLogin() {
        return this.queryLogin.replace('{0}', `"${this.correoElectronico}"`).replace('{1}', `"${this.contrasena}"`);
    }
}
export default User;
