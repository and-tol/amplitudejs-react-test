import * as Amplitude from 'amplitudejs';
import { useEffect, useRef } from 'react';

import { initialData } from './initialData';

import './App.css';
import { Playlist } from './Playlist';
import { PlayerControls } from './PlayerControls';
import { TimeProgress } from './TimeProgress'

function App() {
  const playlist = initialData.playlist || null;

  const refPlayer = useRef();

  useEffect(() => {
    Amplitude.init(initialData);
  }, []);

  console.log('refPlayer', refPlayer.current);

  return (
    <>
      <div ref={refPlayer} className='example-container'>
        <div className='left'>
          <span className='playlist-title'>Playlist 1</span>
          <div id='white-player'>
            <div className='white-player-top'>
              <div>&nbsp;</div>
              <div className='center'>
                <span className='now-playing'>Now Playing</span>
              </div>
              <div>
                <img
                  alt=''
                  src='https://521dimensions.com/img/open-source/amplitudejs/examples/multiple-playlists/show-playlist.svg'
                  className='show-playlist'
                />
              </div>
            </div>

            <div id='white-player-center'>
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

              <TimeProgress playlist={playlist} />

            </div>

            <PlayerControls playlist={playlist} />

            <div id='white-player-playlist-container slide-in-top'>
              <div className='white-player-playlist-top'>
                <div></div>
                <div>
                  <span className='queue'>Queue</span>
                </div>
                <div>
                  <img
                    src='https://521dimensions.com/img/open-source/amplitudejs/examples/multiple-playlists/close.svg'
                    className='close-playlist'
                  />
                </div>
              </div>

              <div className='white-player-up-next'>Up Next</div>

              <Playlist />

              <div className='white-player-playlist-controls'>
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
            </div>
          

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
