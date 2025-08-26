function ContainerProgress({moveForward, reference, timeTotalMusic, timeCurrentMusic}) {

    return (
        <section onClick={moveForward} className="container-progresso">
        <div className="progress-total" ref={reference} onClick={moveForward}>
            <div className="progress-current" style={{
                    width: `${timeCurrentMusic*100/timeTotalMusic}%`
                }}>
            </div>
        </div>
        </section>
    )

}

export default ContainerProgress;