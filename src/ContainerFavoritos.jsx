import MusicasACDC from "./assets/musicas/album1/MusicasACDC";
import MusicaOasis from "./assets/musicas/album2/MusicaOasis";

function ContainerFavoritos({ ImagemCapa, textoAlternativo, trocarAlbum, tocarAlbum}) {

    return (
        <div>
            <div className="container-favoritos">
                <h2>Ouvir Novamente</h2>
                <div className="container-acdc">
                    <button onClick={() => trocarAlbum(MusicasACDC)}><img src={ImagemCapa[0]} alt={textoAlternativo} /></button>
                    <div className="texto-acdc">
                        <h3>AC/DC</h3>
                        <h4>Pedro Henrique</h4>
                        <p><span>•</span> {MusicasACDC.length} itens</p>
                    </div>  
                </div>
                <div className="container-acdc">
                    <button onClick={() => trocarAlbum(MusicaOasis)}><img src={ImagemCapa[1]} alt={textoAlternativo} /></button>
                    <div className="texto-acdc">
                        <h3>Oasis</h3>
                        <h4>Mateus</h4>
                        <p><span>•</span> {MusicaOasis.length} itens</p>
                    </div>  
                </div>
            </div>
        </div>
    )



}

export default ContainerFavoritos;