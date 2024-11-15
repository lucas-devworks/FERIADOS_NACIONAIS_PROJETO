import estilos from './Footer.module.css';
import Link from 'next/link';
// função
import {retornaAnoAtual} from '@/service/index';
// icones
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className={estilos.container_rodape}>
        
            <div className={estilos.secao_links}>
                <div className={estilos.portfolio}>
                    <ul type="none">
                     <h4>Meu Portfólio</h4>
                      <li><Link href="https://myportfolio-f0rj7grib-lucas-teixeira-santos-projects.vercel.app/" target='_blank'>
                      Alguns Projetos</Link></li>
                     </ul>
                </div>

                <div className={estilos.contatos}>
                    <ul type="none">
                        <h4>Contatos</h4>
                        <li><Link href="https://github.com/lucas-devworks" target='_blank'>
                            <div><FaGithub /></div>
                            Github</Link>
                        </li>
                        <li><Link href="https://www.linkedin.com/in/lucas-teixeira-santos-br/" target='_blank'>
                            <div><FaLinkedin /></div>
                            LinkedIn</Link>
                        </li>
                        <li><Link href="mailto:lucasteixeirasantos74@gmail.com">
                            <div><MdEmail /></div>
                            Email</Link>
                        </li>
                    </ul>
                </div>
                
                <div className={estilos.copy}>
                    <small> &copy; Copyright {retornaAnoAtual()} Lucas Teixeira Santos</small>
                </div>
            </div>

        </footer>
    )
}