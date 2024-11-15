"use client";
import estilos from './Holidays.module.css'; // estilos
import { useState } from 'react';
const {valorMapeadoData, retornaFeriados, dataString} = require("@/service/index"); // funções
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Holidays() {
    // state //
    const [botaoClicado, setBotaoClicado] = useState(false); // botão
    const [mesSelecionado, setMesSelecionado] = useState(""); // select
        
    const botaoOn = () => { 
        setBotaoClicado(true);
    };

    const handleSelectChange = (evento) => {
        const mes = Number(evento.target.value);
        if (mes > 0 && mes <= 12) {
            setMesSelecionado(mes);
                 setBotaoClicado(false); // caso algum mês seja digitado, o botão retornará falso novamente, assim removendo o array;
        }
   
    };

    return (
        <section className={estilos.secao}>
            {/* título e selector*/}
            <div className={estilos.container_titulo}>
                <div className={estilos.titulo}>
                    <h3>SELECIONE UM MÊS</h3>
                    <div><FaRegCalendarAlt /></div>
                </div>
                <div className={estilos.drop_mes}>
                    <button onClick={botaoOn}>TODOS</button>

                    <select name="meses" onChange={handleSelectChange} > {/* capturando value do option com onChange*/}
                        <option value="0">MÊS</option>
                        <option value="1">JANEIRO</option>
                        <option value="2">FEVEREIRO</option>
                        <option value="3">MARÇO</option>
                        <option value="4">ABRIL</option>    
                        <option value="5">MAIO</option>
                        <option value="6">JUNHO</option>
                        <option value="7">JULHO</option>
                        <option value="8">AGOSTO</option>
                        <option value="9">SETEMBRO</option>
                        <option value="10">OUTUBRO</option>
                        <option value="11">NOVEMBRO</option>
                        <option value="12">DEZEMBRO</option>
                    </select>
                </div>
            </div>
            {/* área de retorno */}
            <div className={estilos.container_retorno}>
            {/* consumindo função com método map */}
               { (botaoClicado ? retornaFeriados() : valorMapeadoData(mesSelecionado)).map((feriado, index) => 
               (<div key={index}>
                    <p>FERIADO: <span>{feriado.nome}</span></p>
                    <p>DATA: <span>{dataString(feriado.data)}</span></p>
               </div>)
                )}

            </div>
        </section>
    )
}