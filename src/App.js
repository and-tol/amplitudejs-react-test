import { useEffect, useRef, useContext } from 'react';

import { PlayerContext } from './context/PlayerContext';

import './App.css';

import { PlayerControls } from './Player/PlayerControls';
import { TimeProgress } from './Player/TimeProgress';
import { PlaylistContainer } from './PlaylistContainer/PlaylistContainer';
import { ReactComponent as PlaylistShow } from './img/playlist.svg';
import { SongInfo } from './Player/SongInfo';
import { SongToAdd } from './SongToAdd/SongToAdd'

function App() {
  const {Amplitude, initialData, songsToAdd, playlist, handleShowPlaylist } = useContext(
    PlayerContext
  );

  const refPlayer = useRef();

  useEffect(() => {
    Amplitude.init(initialData);
  }, [initialData]);

  return (
    <>
      <div ref={refPlayer} className='example-container'>
        <div className='left'>
          <span className='playlist-title'>{'play'}</span>
          <div id='player'>
            <div className='top'>
              <div>&nbsp;</div>
              <div className='center'>
                <span className='now-playing'>Now Playing</span>
              </div>
              <div className='show-playlist' onClick={handleShowPlaylist}>
                <PlaylistShow width='20' fill='lightgray' />
              </div>
            </div>

            <div id='center'>
              <SongInfo playlist={playlist} />

              <TimeProgress playlist={playlist} />
            </div>

            <PlayerControls playlist={playlist} />

            <PlaylistContainer />
          </div>
        </div>
        <div className='right'>{songsToAdd.map((songToAdd, i) => {
          return (
            <SongToAdd
              cover_art_url={songToAdd.cover_art_url}
              songToAddIndex={i}
            />
          );
        })}</div>
      </div>
    </>
  );
}

export default App;
