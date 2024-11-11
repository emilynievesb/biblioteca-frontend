import User from '../../entities/user';
import UsersFacade from '../../services/user.facade';
const singup = async (data) => {
    const { name, surname, address, phone, email, day, month, year, username, password } = data;
    console.log(new Date(`${day}/${month}/${year}`).toISOString().split('T')[0]);

    const user = new User();
    const userFacade = new UsersFacade();
    user.setNombres(name);
    user.setApellidos(surname);
    user.setDireccion(address);
    user.setTelefono(phone);
    user.setCorreoElectronico(email);
    user.setFechaNacimiento(new Date(`${day}/${month}/${year}`).toISOString().split('T')[0]);
    user.setNomUsuario(username);
    user.setContrasena(password);
    user.setRol('usuario');
    let queryValidate = user.buildQueryValidate();
    console.log(queryValidate);
    let responseValidate = await userFacade.fetchPost(queryValidate);
    if (responseValidate.data.usersPermissionsUsers.data.length === 0) {
        let queryUser = user.buildQueryRegister();
        console.log(queryUser);
        let responseUser = await userFacade.fetchPost(queryUser);
        user.setId(responseUser.data.register.user.id);
        let queryUserInfo = user.buildQueryRegisterUser();
        console.log(queryUserInfo);
        let responseUsuario = await userFacade.fetchPost(queryUserInfo);
        console.log(responseValidate);
        console.log(responseUser);
        console.log(responseUsuario);
        return 'okkkkkkkkkkkkkkkkkkkkkkkkkk';
    } else {
        return 'Ya existe el nombre de usuario o el email en la base de datos';
    }
};

export default singup;

const login = async (data) => {
    const user = new User();
    const userFacade = new UsersFacade();

    const { email, password } = data;

    user.setCorreoElectronico(email);
    user.setContrasena(password);
    let query = user.buildQueryLogin();
    console.log(query);

    let response = await userFacade.fetchPost(query);
    console.log(response);
};

export { login };
