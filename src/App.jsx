import './App.css'
import { useState, useRef, useEffect} from 'react';
import BarraControles from './BarraControles';
import ContainerFavoritos from './ContainerFavoritos';
import GerenciadorAlbum from './GerenciadorAlbum';
import 'bootstrap-icons/font/bootstrap-icons.css'
import MusicasACDC from "./assets/musicas/album1/MusicasACDC"
import MusicaOasis from './assets/musicas/album2/MusicaOasis';
import ImagemCapa from './ImagemCapa'

function App() {

  const [taTocando, definirTaTocando] = useState(false);
  const [playList, definirPlaylist] = useState(MusicasACDC);
  const [albumAtual, definirAlbum] = useState(0);
  const [listaMusica, definirListaMusica] = useState(0);
  const refMusica = useRef(null);

  const InformacaoAlbum ={
    album: playList,
  }
  
  const trocarAlbum = (novoAlbum) => {
    definirPlaylist(novoAlbum);
    definirListaMusica(0);
    if (refMusica.current) {
      refMusica.current.src= novoAlbum[0];
      refMusica.current.play();
      definirTaTocando(true);
    }
  }

  const nextMusicaDoAlbum = () => {
    
   let proximo = listaMusica + 1;

  if (proximo >= playList.length) {
    proximo = 0; // volta pro início
  }

  definirListaMusica(proximo);
  refMusica.current.src = playList[proximo];
  refMusica.current.play();
    
  }
  useEffect(() => {
  const el = refMusica.current;
  if (!el) return;
  if (!playList.length) return;

  if (taTocando) {
    el.currentTime = 0;
    el.play().catch(() => {});
  }
}, [listaMusica, playList, taTocando]);
    
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
    <ContainerFavoritos tocarAlbum={() => refMusica.current.play()}
      ImagemCapa={ImagemCapa} trocarAlbum={trocarAlbum}
      InformacaoAlbum={InformacaoAlbum} nextMusicaDoAlbum={nextMusicaDoAlbum}
     />
    <BarraControles taTocando={taTocando} tocarOuPausar={tocarOuPausar} />
    <GerenciadorAlbum musicaAlbum={playList[listaMusica]} referencia={refMusica} onEnded={nextMusicaDoAlbum}/>
  </>

}

export default App
