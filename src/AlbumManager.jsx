const AlbumManager = ({ musicAlbum, reference, onEnded  }) => {
    return <audio src={musicAlbum} ref={reference} onEnded={onEnded } />
};

export default AlbumManager;