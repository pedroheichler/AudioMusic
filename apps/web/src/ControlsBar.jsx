function ControlsBar ({togglePlay, isPlaying, nextMusic, backMusic, timeCurrentMusic, timeTotalMusic, CoverImage}) {
    const formatTime = (timeInSeconds) => {
        const time = new Date(null);
        time.setSeconds(timeInSeconds);
        return time.toISOString().slice(14, 19);
    };
    
    return(
        <div className="container-Barra">
            <div className="container-botoes">
                <button onClick={backMusic}> <i className="bi bi-skip-start-fill container-botoes-skip"></i></button>
                <button onClick={togglePlay}> <i className={ `bi bi-${ isPlaying ? "pause" : "play-fill"
            }`} style={{fontSize: "45px"}}></i> </button>
                <button onClick={nextMusic}><i className="bi bi-skip-end-fill  container-botoes-skip"></i></button>
            </div>
            <div>
                <p className="container-barra-time">{formatTime(timeCurrentMusic)} / {formatTime(timeTotalMusic)}</p>
            </div>
            <div>
                <div ><img className="container-cover-barra" src={CoverImage[1]} alt="" /></div>
            </div>

        </div>
    )
}

export default ControlsBar;