
export class Orcamento {
    constructor(idUsuario, idCliente, vlrTotal, data, items = []) {
      this.idUsuario = idUsuario;
      this.idCliente = idCliente;
      this.vlrTotal = vlrTotal;
      this.data = data;
      this.items = items
  }
}