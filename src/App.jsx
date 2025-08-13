import './App.css'
import { useState, useRef, useEffect} from 'react';
import BarraControles from './BarraControles';
import ContainerFavoritos from './ContainerFavoritos';
import GerenciadorAlbum from './GerenciadorAlbum';
import 'bootstrap-icons/font/bootstrap-icons.css'
import acdc from "./assets/ACDC.png"
import MusicasACDC from "./assets/musicas/album1/MusicasACDC"

function App() {

  const [taTocando, definirTaTocando] = useState(false);
  const [albumAtual, definirAlbum] = useState(0);
  const refMusica = useRef(null);

  const InformacaoAlbum = {
    nomeAlbum: "ACDC",
    album: MusicasACDC,
    autor: "Pedro",
    capa: acdc,
    textoAlternativo: "ACDC",
  }

  const NumMusicas = MusicasACDC.length;

  const tocarAlbum = () => {
    refMusica.current.play();
    definirTaTocando(true);
  };

  const pauseAlbum = () => {
    refMusica.current.pause();
    definirTaTocando(false);
  };

  const tocarOuPausar = () => {
    if(taTocando) {
      pauseAlbum();
    } else {
      tocarAlbum();
    }
  }
  
  return <>
    <ContainerFavoritos tocarAlbum={tocarAlbum} imagemCapa={InformacaoAlbum.capa} textoAlternativo={InformacaoAlbum.textoAlternativo} NumMusicas={NumMusicas}/>
    <BarraControles taTocando={taTocando} tocarOuPausar={tocarOuPausar} />
    <GerenciadorAlbum musicaAlbum={InformacaoAlbum.album[albumAtual]} referencia={refMusica}/>
  </>

}

export default App
