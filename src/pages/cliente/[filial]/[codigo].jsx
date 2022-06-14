import { useRouter } from "next/router"
import { useEffect } from "react"
import Cabecalho from "../../../components/Cabecalho";
import Layout from "../../../components/Layout";

export default function ClientePorCodigo(){
  const router = useRouter()
  // useEffect(() => {
  //   console.log(router.query.codigo);
  // },[])
  return(
    // <Cabecalho>
    //   TESTE PROPS {router.query.codigo}
    // </Cabecalho>
    <Layout titulo="navegação dinamica">
      <div>Filial = {router.query.filial}</div>
      <div>Código = {router.query.codigo}</div>
    </Layout>
  )
}