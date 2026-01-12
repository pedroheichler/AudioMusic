import MusicACDC from "./assets/musicas/album1/MusicACDC";
import MusicOasis from "./assets/musicas/album2/MusicOasis";
import MusicFavorito from "./assets/musicas/albumFavorito/MusicFavorito"
import MusicCharlieBronw from "./assets/musicas/charlieBrown/MusicCharlieBronw";

function ContainerFavoritos({ CoverImage, switchAlbum, totalMusic, ProfilePhoto}) {

    return (
        <div>
            <div className="container-background"></div>
            <div className="container-favorites">  
            <div className="container-head-favorite">
                <img className="container-ProfilePhoto" src={ProfilePhoto} alt="" />
                <h2>Ouvir Novamente</h2>
            </div>            
            <div className="container-favorites-album">
                <div className="container-album">
                    <button onClick={() => switchAlbum(MusicFavorito)}><img src={CoverImage[2]} alt='' /></button>
                    <div className="texto-acdc">
                        <h3>Pedrao das Musicas</h3>
                        <h4>Pedro Henrique</h4>
                        <p><span>•</span> {MusicFavorito.length} itens</p>
                    </div>  
                </div>
                <div className="container-album">
                    <button onClick={() => switchAlbum(MusicACDC)}><img src={CoverImage[0]} alt='' /></button>
                    <div className="texto-acdc">
                        <h3>AC/DC</h3>
                        <h4>Pedro Henrique</h4>
                        <p><span>•</span> {MusicACDC.length} itens</p>
                    </div>  
                </div>
                <div className="container-album">
                    <button onClick={() => switchAlbum(MusicCharlieBronw)} ><img className="ChannelFavorite" src={CoverImage[3]} alt='' /></button>
                    <div className="ChannelFavorite-texto">
                        <h4>Charlie Bronw Jr</h4>
                        <p>2,51 mi de inscritos</p>
                    </div>  
                </div>
                <div className="container-album">
                    <button onClick={() => switchAlbum(MusicOasis)}><img className="container-album-img" src={CoverImage[1]} alt='' /></button>
                    <div className="texto-acdc">
                        <h3>Oasis</h3>
                        <h4>Mateus</h4>
                        <p><span>•</span> {MusicOasis.length} itens</p>
                    </div>  
                </div>
            </div>
        </div>
        </div>
    )



}

export default ContainerFavoritos;