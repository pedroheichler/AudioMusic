import './App.css'
import { useState, useRef, useEffect} from 'react';
import ControlsBar  from './ControlsBar';
import FavoritesContainer from './FavoritesContainer';
import AlbumManager from './AlbumManager';
import 'bootstrap-icons/font/bootstrap-icons.css'
import MusicACDC from "./assets/musicas/album1/MusicACDC"
import CoverImage from './CoverImage'
import ProfilePhoto from "./assets/ProfilePhoto.jpg";

function App() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [playList, setPlaylist] = useState(MusicACDC);
  const [trackIndex, setTrackIndex] = useState(0);
  const audioRef  = useRef(null);

  const albumInfo  ={
    album: playList,
    totalMusic: playList.length,
  }
  
  const switchAlbum = (newAlbum) => {
    setPlaylist(newAlbum);
    setTrackIndex(0);
    if (audioRef .current) {
      audioRef .current.src= newAlbum[0];
      audioRef .current.play();
      setIsPlaying(true);
    }
  }

  const nextTrack = () => {
    
   let next = trackIndex + 1;

  if (next >= playList.length) {
    next = 0;
  }

  setTrackIndex(next);
  audioRef .current.src = playList[next];
  audioRef .current.play();
    
  }
  useEffect(() => {
  const af = audioRef .current;
  if (!af) return;
  if (!playList.length) return;

  if (isPlaying) {
    af.currentTime = 0;
    af.play().catch(() => {});
  }
}, [trackIndex, playList, isPlaying]);
    
  const playAlbum  = () => {
    audioRef .current.play();
    setIsPlaying(true);
  };

  const pauseAlbum = () => {
    audioRef .current.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if(isPlaying) {
      pauseAlbum();
    } else {
      playAlbum();
    }
  }

  const nextMusic = () => {
    if(trackIndex === albumInfo.totalMusic - 1) {
      setTrackIndex(0)
    } else {
      setTrackIndex(trackIndex + 1)
    }
  }

  const backMusic = () => {
    if(trackIndex === 0) {
      setTrackIndex(albumInfo.totalMusic - 1)
    } else {
      setTrackIndex(trackIndex - 1)
    }
  }

  return <>
    <FavoritesContainer 
      CoverImage={CoverImage} switchAlbum ={switchAlbum}
      albumInfo={albumInfo} ProfilePhoto={ProfilePhoto}
     />
    <ControlsBar isPlaying={isPlaying} togglePlay={togglePlay} nextMusic={nextMusic} backMusic={backMusic}/>
    <AlbumManager musicAlbum={playList[trackIndex]} reference={audioRef } onEnded={nextTrack}/>
  </>

}

export default App
