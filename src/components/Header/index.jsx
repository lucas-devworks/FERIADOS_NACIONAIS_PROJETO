import estilos from './Header.module.css'; // estilos
// função
import {saudacao, buscaFeriadoAtual} from '@/service/index';

export default function Header() {
    return (
        <header className={estilos.container_cabecalho}>
                <p className={estilos.texto_infinito}>{buscaFeriadoAtual()}</p>
        </header>
    )
};