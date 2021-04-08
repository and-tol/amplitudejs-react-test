export const SongInfo = ({playlist}) => {
  return (
    <>
      <img
        alt=''
        data-amplitude-song-info='cover_art_url'
        data-amplitude-playlist={playlist}
        className='main-album-art'
      />

      <div className='song-meta-data'>
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
    </>
  );
}