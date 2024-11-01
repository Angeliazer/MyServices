export class Servico {
    constructor(idUsuario, idCliente, idOrcamento, dataInicio, dataFim, situacao, total, saldo) {
        this.idUsuario = idUsuario
        this.idCliente = idCliente
        this.idOrcamento = idOrcamento
        this.dataInicio = dataInicio
        this.dataFim = dataFim
        this.situacao = situacao
        this.total = total
        this.saldo = saldo
    }
}