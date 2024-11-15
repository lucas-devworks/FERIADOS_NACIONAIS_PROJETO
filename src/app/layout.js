import "./globals.css"; //estilos globais
// componentes fixos
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FERIADOS - 2025",
  description: "Projeto desenvolvido com o objetivo de através de um layout super intuitivo, os usuários após selecionar o mês, obterão informações sobre quais feriados compõe o mesmo. Esse projeto veio da necessidade ao qual pude observar no meu ambiente de trabalho, sempre que é feriado, fechamos a escola, com isso os alunos precisam ser avisados antes, porém na correria as vezes quando nos damos conta do feriado, já está um pouco acima da hora, para facilitar nesse quesito, essa página fornecerá tais informações de maneira simples e objetiva. Também aproveitei a oportunidade para desenvolver completamente do zero esse projeto e consolidar meus conhecimentos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
      <Header/> {/* Topo */}

      {children}
      
      <Footer/> {/* Rodapé */}
      </body>
    </html>
  );
}
