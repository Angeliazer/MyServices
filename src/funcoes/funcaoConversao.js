export const ConverteData = (data) => {
    let dataIso = new Date(data)
    const dats = dataIso.toISOString().slice(0, 10)
    const [ano, mes, dia] = dats.split("-")
    return `${dia}/${mes}/${ano}`
}

export const ConverteValor = (valor) => {
    return Intl.NumberFormat("pt-BR", {
        // Devolve o valor sem o R$...
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(valor)
}

export const ComparaData = (dataInicial, dataFinal) => {
    const diaIni = dataInicial.substring(0, 2)
    const mesIni = dataInicial.substring(3, 5)
    const anoIni = dataInicial.substring(6)

    const dataIni = 99999999 - parseInt(anoIni + mesIni + diaIni)

    const diaFim = dataFinal.substring(0, 2)
    const mesFim = dataFinal.substring(3, 5)
    const anoFim = dataFinal.substring(6)

    const dataFim = 99999999 - parseInt(anoFim + mesFim + diaFim)

    return dataFim <= dataIni
}

export const FormatDataDate = (data) => {
    const dia = parseInt(data.substring(0, 2))
    const mes = parseInt(data.substring(3, 5))
    const ano = parseInt(data.substring(6))
    return `${ano}-${mes}-${dia}`
}
