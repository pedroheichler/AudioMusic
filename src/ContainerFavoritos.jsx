function ContainerFavoritos(props) {

    return (
        <div>
            <div className="container-favoritos">
                <h1>Favoritos</h1>
                <div className="container-acdc">
                    <button><img src={props.imagemCapa} alt={props.textoAlternativo} /></button>
                    <div className="texto-acdc">
                        <h3>ACDC</h3>
                        <h4>Pedro Henrique</h4>
                        <p><span>•</span>  301 itens</p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )



   /*  */
}

export default ContainerFavoritos;