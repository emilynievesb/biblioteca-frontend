class Prestamo {
    id_libro;
    id_user;
    fecha_inicio;
    fecha_pac_dev;
    fecha_fin_dev;
    valor_pactado_dia;
    valor_total_cierre;

    constructor() {
        this.queryCreate = `mutation {
            createPrestamo(data: {
              libro: "{0}",
              id_user: "{1}",
              fecha_inicio: "{2}",
              fecha_pac_dev: "{3}",
              valor_pactado_dia: {4},
            }) {
              data {
                id
                attributes {
                  libro {
                    data {
                      id
                      attributes {
                        titulo
                      }
                    }
                  }
                  id_user {
                    data {
                      id
                      attributes {
                        username
                        email
                      }
                    }
                  }
                  fecha_inicio
                  fecha_pac_dev
                  fecha_fin_dev
                  valor_pactado_dia
                  valor_total_cierre
                }
              }
            }
          }
          `;
    }

    setLibro(id_libro) {
        this.id_libro = id_libro;
    }

    setIdUser(id_user) {
        this.id_user = id_user;
    }

    setFechaInicio(fecha_inicio) {
        this.fecha_inicio = fecha_inicio;
    }

    setFechaPacDev(fecha_pac_dev) {
        this.fecha_pac_dev = fecha_pac_dev;
    }

    setFechaFinDev(fecha_fin_dev) {
        this.fecha_fin_dev = fecha_fin_dev;
    }

    setValorPactadoDia(valor_pactado_dia) {
        this.valor_pactado_dia = valor_pactado_dia;
    }

    setValorTotalCierre(valor_total_cierre) {
        this.valor_total_cierre = valor_total_cierre;
    }
    buildQueryCreate() {
        return this.queryCreate
            .replace('{0}', `"${this.id_libro}"`)
            .replace('{1}', `"${this.id_user}"`)
            .replace('{2}', `"${new Date().toISOString()}"`)
            .replace('{3}', `"${this.fecha_pac_dev}"`)
            .replace('{4}', `"${this.valor_pactado_dia}"`);
    }
}
export default Prestamo;
