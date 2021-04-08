export const TimeProgress = ({ playlist }) => {
  return (
    <div className='time-progress'>
      <div id='progress-container'>
        <input
          type='range'
          className='amplitude-song-slider'
          data-amplitude-playlist={playlist}
        />
        <progress
          id='song-played-progress'
          className='amplitude-song-played-progress'
          data-amplitude-playlist={playlist}
        ></progress>
        <progress
          id='song-buffered-progress'
          className='amplitude-buffered-progress'
          value='0'
        ></progress>
      </div>

      <div className='time-container'>
        <span className='current-time'>
          <span
            className='amplitude-current-minutes'
            data-amplitude-playlist={playlist}
          ></span>
          :
          <span
            className='amplitude-current-seconds'
            data-amplitude-playlist={playlist}
          ></span>
        </span>
      </div>
      <span className='duration'>
        <span
          className='amplitude-duration-minutes'
          data-amplitude-playlist={playlist}
        ></span>
        :
        <span
          className='amplitude-duration-seconds'
          data-amplitude-playlist={playlist}
        ></span>
      </span>
    </div>
  );
};
