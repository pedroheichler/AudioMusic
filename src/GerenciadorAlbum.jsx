const GerenciadorAlbum = ({ musicaAlbum, referencia, onEnded  }) => {
    return <audio src={musicaAlbum} ref={referencia} controls onEnded={onEnded } />
};

export default GerenciadorAlbum;