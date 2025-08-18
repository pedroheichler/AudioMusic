function ControlsBar ({togglePlay, isPlaying, nextMusic, backMusic}) {
    return(
        <div className="container-Barra">
            <div className="container-botoes">
                <button onClick={backMusic}> <i className="bi bi-skip-start"></i></button>
                <button onClick={togglePlay}> <i className={`bi bi-${ isPlaying ? "pause" : "play"
            }-circle-fill`}></i> </button>
                <button onClick={nextMusic}><i className="bi bi-skip-end"></i></button>
            </div>
        </div>
    )
}

export default ControlsBar;