const AlbumManager = ({ musicAlbum, reference, onEnded, setTimeCurrentMusic, setTimeTotalMusic}) => {
    return <audio src={musicAlbum} ref={reference} onEnded={onEnded }
    onLoadedMetadata={
    () => setTimeTotalMusic(
        reference.current.duration
    )}
    onTimeUpdate={
        () => setTimeCurrentMusic(
            reference.current.currentTime
        )
    }
    />
};

export default AlbumManager;