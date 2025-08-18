import MusicACDC from "./assets/musicas/album1/MusicACDC";
import MusicOasis from "./assets/musicas/album2/MusicOasis";

function ContainerFavoritos({ CoverImage, switchAlbum, totalMusic, ProfilePhoto}) {

    return (
        <div className="container-favorites">
            <div className="container-head-favorite">
                <img className="container-ProfilePhoto" src={ProfilePhoto} alt="" />
                <h2>Ouvir Novamente</h2>
            </div>            
            <div className="container-favorites-album">
                <div className="container-album">
                    <button onClick={() => switchAlbum(MusicACDC)}><img src={CoverImage[0]} alt='' /></button>
                    <div className="texto-acdc">
                        <h3>AC/DC</h3>
                        <h4>Pedro Henrique</h4>
                        <p><span>•</span> {MusicACDC.length} itens</p>
                    </div>  
                </div>
                <div className="container-album">
                    <button onClick={() => switchAlbum(MusicOasis)}><img src={CoverImage[1]} alt='' /></button>
                    <div className="texto-acdc">
                        <h3>Oasis</h3>
                        <h4>Mateus</h4>
                        <p><span>•</span> {MusicOasis.length} itens</p>
                    </div>  
                </div>
            </div>
        </div>
    )



}

export default ContainerFavoritos;