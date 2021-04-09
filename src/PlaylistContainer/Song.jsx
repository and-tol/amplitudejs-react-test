export const Song = props => {
  const { cover_art_url, name, artist, album, songIndex, playlist } = props;

  return (
    <>
      <div
        className='playlist-song amplitude-song-container amplitude-play-pause'
        data-amplitude-song-index={songIndex}
        data-amplitude-playlist={playlist}
      >
        <img src={cover_art_url} alt={name} />

        <div className='playlist-song-meta'>
          <span className='playlist-song-name'>{name}</span>
          <span className='playlist-artist-album'>
            {`${artist} • ${album}`}
          </span>
        </div>
      </div>
    </>
  );
};
