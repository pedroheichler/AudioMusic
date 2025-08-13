const GerenciadorAlbum = ({ musicaAlbum, referencia }) => {
    return <audio src={musicaAlbum} ref={referencia}/>
};

export default GerenciadorAlbum;