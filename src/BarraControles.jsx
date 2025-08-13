function BarraControles({tocarOuPausar, taTocando}) {
    return(
        <div className="container-Barra">
            <div className="container-botoes">
                <button> <i className="bi bi-skip-start"></i></button>
                <button onClick={tocarOuPausar}> <i className={`bi bi-${ taTocando ? "pause" : "play"
            }-circle-fill`}></i> </button>
                <button><i className="bi bi-skip-end"></i></button>
            </div>
        </div>
    )
}

export default BarraControles;