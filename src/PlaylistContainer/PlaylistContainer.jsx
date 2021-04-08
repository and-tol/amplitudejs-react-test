import { useContext, useState } from 'react';

import { ReactComponent as ClosePlaylist } from '../img/close.svg';
import { Playlist } from './Playlist';
import { PlaylistControls } from './PlaylistControls';

import { PlayerContext } from '../context/PlayerContext';

import styles from './PlaylistContainer.module.scss';

export const PlaylistContainer = () => {
  const { playlists, playlist, showPlaylist, handleHidePlaylist } = useContext(
    PlayerContext
  );

  const [playlistName, setPlaylistName] = useState(
    playlists[playlist].playlistName || null
  );

  const [songs, setSongs] = useState(playlists[playlist].songs || null);

  // 'slide-in-top'
  const cls = ['slide-out-top'];
  if (showPlaylist) {
    cls.fill('slide-in-top');
  }

  return (
    <div
      id='playlist-container'
      className={cls[0]}
      style={{ display: showPlaylist ? 'block' : 'none' }}
    >
      <div className='playlist-top'>
        <div></div>
        <div>
          <span className='queue'>Queue</span>
        </div>

        <div className={styles.closePlaylist} onClick={handleHidePlaylist}>
          <ClosePlaylist width='18' fill='lightgray' />
        </div>
      </div>

      <div className='up-next'>{playlistName}</div>

      <Playlist songs={songs} />

      <PlaylistControls />
    </div>
  );
};
