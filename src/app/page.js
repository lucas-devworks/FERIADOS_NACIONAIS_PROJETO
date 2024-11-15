import estilos from "./page.module.css"; // estilos
// componentes
import Title from "@/components/Title";
import Holidays from "@/components/Holidays";

export default function Home() {
  return (
    <div className={estilos.container}>
       <Title />
       <Holidays />
    </div>
  );
};

