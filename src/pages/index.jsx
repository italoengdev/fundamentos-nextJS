import Link from "next/link"
import Navegador from "../components/Navegador"

export default function Inicio(){
  return (
    <div style={{
                display:"flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                flexWrap:'wrap'
    }}>
      <Navegador texto="Estiloso" destino="/estiloso"/>
      <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3"/>
      <Navegador texto="JSX" destino="/jsx" cor="crimson"/>
      <Navegador texto="Navegação #01" destino="/navegacao" cor="green"/>
      <Navegador texto="Navegação #02" destino="/cliente/sp-2/123" cor="blue"/>
      <Navegador texto="Navegação #03" destino="/estado" cor="purple"/>
      <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#095491"/>
      <Navegador texto="Conteúdo Estático" destino="/estatico" cor="darkred"/>
      <Navegador texto="Conteúdo Dinâmico" destino="/dinamico" cor="orange"/>
    </div>
  )
}