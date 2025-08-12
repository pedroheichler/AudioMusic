import './App.css'
import BarraControle from './BotoesControles';
import ContainerFavoritos from './ContainerFavoritos';
import 'bootstrap-icons/font/bootstrap-icons.css'
import acdc from "./assets/ACDC.png"

function App() {

  const InformacaoAlbum = {
    album: "ACDC",
    autor: "Pedro",
    faixas: 6,
    capa: acdc,
    textoAlternativo: "ACDC",
  }

  return <>
    <ContainerFavoritos imagemCapa={InformacaoAlbum.capa} textoAlternativo={InformacaoAlbum.textoAlternativo}/>
    <BarraControle/>
  </>

}

export default App
