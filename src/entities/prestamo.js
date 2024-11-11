class Prestamo {
    username
    constructor() {
        this.queryFetchByUsername = `
            query({0}: String!) {
                prestamos(filters: { id_user: { username: { eq: {0} } } }) {
                    data {
                        id
                        attributes {
                            fecha_inicio
                            fecha_pac_dev
                            fecha_fin_dev
                            valor_pactado_dia
                            valor_total_cierre
                            id_libro_local {
                                data {
                                    id
                                    attributes {
                                        titulo
                                        localidad
                                    }
                                }
                            }
                            id_user {
                                data {
                                    id
                                    attributes {
                                        username
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `;
    }

    setUsername(username) {
        this.username = username;
        return
    }
    buildQueryFetchByUsername() {
        return this.queryFetchByUsername.replace('{0}',`"${this.username}"`)
    }
}

export default Prestamo;
