import { feriados } from "@/data/dates"; // dados

// retorna o array completo
const retornaFeriados = () => feriados;

// filtra por mês
const filtros = (mes) => {
    
    return feriados.filter(({ data }) =>  {
        const [ano, mesString, dia] = data.split("-");
        return new Date(ano, mesString - 1, dia).getMonth() === mes;
    })
};

// faz a correção do valor real do mês
const valorMapeadoData = (mes) => filtros(mes - 1);

// retorna data em formato string
const dataString = (data) => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    if(!data) return 'Data inválida';
                         // tratando interpretação de data
    const getMes = new Date(`${data}T00:00:00`).toLocaleString('pt-br', options);
    return getMes;
};

// busca o ano atual
const retornaAnoAtual = () => new Date().getFullYear();

// saudar o usuário baseado no horário atual;
const saudacao = () => {
    
    const data = new Date();
    const horaAtual = data.getHours();
        let resultado = '';
            if (horaAtual < 12) 
            {
                resultado  = 'Bom Dia'
            }
            else if (horaAtual >= 12 && horaAtual < 18)
            {
                resultado = 'Boa Tarde'       
            }
            else {
                resultado = 'Boa Noite'
            };
    return resultado;
};

// converte para data BR padrão;
const dataBR = (data) => {
    // tratando interpretação de data
const dataConvertida = new Date(`${data}T00:00:00`).toLocaleDateString('pt-br');
return dataConvertida;
};

// busca no array algum feriado atual
const buscaFeriadoAtual = () => {
    const data = new Date();
    let mes = data.getUTCMonth();

    const filtros = feriados.filter((valor) => {
        let dataFeriado = new Date(valor.data + "T00:00:00Z");
        let valorM = dataFeriado.getUTCMonth();
            return valorM === mes;
    });

    let condicionalDeRotorno = '';

        if (filtros.length > 0) {
            let contador = filtros.length;
                const dataEferiado = filtros.map((DF) => {
                    let nome = DF.nome;
                    let data = DF.data;
                    return `${nome} (${dataBR(data)})`;
                }).join(", ");

                  condicionalDeRotorno = contador > 1
                  ? `Neste mês estão previstos ${contador} feriados: ${dataEferiado}`
                  : `Neste mês está previsto ${contador} feriado:  ${dataEferiado}`;
            } else {
                condicionalDeRotorno = 'sem feriados para esse mês';
            };

            return condicionalDeRotorno;
};



module.exports = {valorMapeadoData, retornaFeriados, dataString, retornaAnoAtual, saudacao, buscaFeriadoAtual};