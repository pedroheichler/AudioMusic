function ControlsBar ({togglePlay, isPlaying, nextMusic, backMusic, timeCurrentMusic, timeTotalMusic}) {
    const formatTime = (timeInSeconds) => {
        const time = new Date(null);
        time.setSeconds(timeInSeconds);
        return time.toISOString().slice(14, 19);
    };
    
    return(
        <div className="container-Barra">
            <div className="container-botoes">
                <button onClick={backMusic}> <i className="bi bi-skip-start"></i></button>
                <button onClick={togglePlay}> <i className={`bi bi-${ isPlaying ? "pause" : "play"
            }-circle-fill`}></i> </button>
                <button onClick={nextMusic}><i className="bi bi-skip-end"></i></button>
            </div>
            <div>
                <p className="container-barra-time">{formatTime(timeCurrentMusic)} / {formatTime(timeTotalMusic)}</p>
            </div>
        </div>
    )
}

export default ControlsBar;