export class Orcamento {
    constructor(idUsuario, idCliente, vlrTotal, data, servico, items = []) {
        this.idUsuario = idUsuario
        this.idCliente = idCliente
        this.vlrTotal = vlrTotal
        this.data = data
        this.servico = servico
        this.items = items
    }
}