
import Layout from "../components/Layout";
import styles from "../styles/Estiloso.module.css"

export default function estiloso(){
  return (
    <Layout titulo="Exemplo css Modularizado">
      <div className={styles.roxo} >
      <h1>Estiloso</h1>
      </div>
    </Layout>
    
  )
}