export const PlaylistControls = ({ playlist }) => {
  return (
    <div className='playlist-controls'>
      <img
        alt=''
        data-amplitude-song-info='cover_art_url'
        data-amplitude-playlist={playlist}
        className='playlist-album-art'
      />
      <div className='playlist-controls'>
        <div className='playlist-meta-data'>
          <span
            data-amplitude-song-info='name'
            data-amplitude-playlist={playlist}
            className='song-name'
          ></span>
          <span
            data-amplitude-song-info='artist'
            data-amplitude-playlist={playlist}
            className='song-artist'
          ></span>
        </div>

        <div className='playlist-control-wrapper'>
          <div
            className='amplitude-prev'
            id='playlist-previous'
            data-amplitude-playlst={playlist}
          ></div>
          <div
            className='amplitude-play-pause'
            data-amplitude-playlist={playlist}
            id='playlist-play-pause'
          ></div>
          <div
            className='amplitude-next'
            id='playlist-next'
            data-amplitude-playlist={playlist}
          ></div>
        </div>
      </div>
    </div>
  );
};
