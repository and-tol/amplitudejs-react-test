export const Song = props => {
  const { cover_art_url, name, artist, album } = props;

  return (
    <>
      <div
        className='playlist-song amplitude-song-container amplitude-play-pause'
        data-amplitude-song-index='0'
        data-amplitude-playlist='trip_hop'
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
