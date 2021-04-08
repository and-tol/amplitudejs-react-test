export const PlayerControls = props => {
  const playlist = props.playlist || null;

  return (
    <>
      <div id='player-controls'>
        <div
          className='amplitude-shuffle amplitude-shuffle-off'
          data-amplitude-playlist={playlist}
          id='shuffle'
        ></div>
        <div
          className='amplitude-prev'
          data-amplitude-playlist={playlist}
          id='previous'
        ></div>
        <div
          className='amplitude-play-pause'
          data-amplitude-playlist={playlist}
          id='play-pause'
        ></div>
        <div
          className='amplitude-next'
          data-amplitude-playlist={playlist}
          id='next'
        ></div>
        <div
          className='amplitude-repeat'
          data-amplitude-playlist={playlist}
          id='repeat'
        ></div>
      </div>
    </>
  );
};
