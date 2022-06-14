import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo(){
  return (<Layout titulo="Exemplo usando componentes">
    <Cabecalho titulo="NextJs & React"/>
    <Cabecalho titulo="Aprenda Next"/>
    {/* Para retornar dois trechos temos que colocar Layout ou reactFragment */}
  </Layout>)
}