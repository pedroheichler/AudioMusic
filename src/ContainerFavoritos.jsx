function ContainerFavoritos(props) {

    return (
        <div>
            <div className="container-favoritos">
                <h2>Ouvir Novamente</h2>
                <div className="container-acdc">
                    <button onClick={props.tocarAlbum}><img src={props.imagemCapa} alt={props.textoAlternativo} /></button>
                    <div className="texto-acdc">
                        <h3>AC/DC</h3>
                        <h4>Pedro Henrique</h4>
                        <p><span>•</span> {props.NumMusicas} itens</p>
                </div>
                    
                    
                </div>
            </div>
        </div>
    )



}

export default ContainerFavoritos;