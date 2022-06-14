import Layout from "../components/Layout"

export default function Jsx(){
  const titulo = <h1>JSX é um Conceito Central</h1>

  function subtitulo(params) {
    return <h2>{"muito legal".toUpperCase()}</h2>
  }
  //props é somente leitura
  return (
    <Layout titulo="Exemplo de CSS Modularizado - JSX">
      <div>
      {titulo}
      {subtitulo()}
      <p>
        {JSON.stringify({nome: "João", idade: 30})}
      </p>
      </div>
    </Layout>
    )
  }