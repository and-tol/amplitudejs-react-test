import { createContext, useContext, useState } from 'react';
import * as Amplitude from 'amplitudejs';
import { initialData, songsToAdd } from '../initialData';

export const PlayerContext = createContext(null);

export const PlayerProvider = ({ children }) => {
  const [songs, setSongs] = useState(initialData.songs || null);
  const [playlists, setPlaylists] = useState(initialData.playlists || null);
  const [playlist, setPlaylist] = useState('emancipator' || null);
  const [playlistTitle, setPlaylistTitle] = useState(
    initialData.playlists[playlist].title || null
  );
  /**
   * Hide / show playlist
   */
  const [showPlaylist, setShowplaylist] = useState(false);
  const handleShowPlaylist = () => {
    setShowplaylist(true);
  };
  const handleHidePlaylist = () => {
    setShowplaylist(false);
  };

  const handleAddSong = songToAddIndex => {
    Amplitude.addSong(songsToAdd[songToAddIndex]);
  };

  /*
   Adds the song to Amplitude, appends the song to the display,
      then rebinds all of the AmplitudeJS elements.

  var newIndex = Amplitude.addSong( songsToAdd[ songToAddIndex ] );
    appendToSongDisplay( songsToAdd[ songToAddIndex ], newIndex );
    Amplitude.bindNewElements();

  */

  /*
      Removes the container that contained the add to playlist button.
      var songToAddRemove = document.querySelector('.song-to-add[song-to-add="'+songToAddIndex+'"]');
      songToAddRemove.parentNode.removeChild( songToAddRemove );
    });

    */

  return (
    <PlayerContext.Provider
      value={{
        Amplitude,
        initialData,
        songsToAdd,
        songs,
        playlists,
        playlist,
        setPlaylist,
        playlistTitle,
        showPlaylist,
        handleShowPlaylist,
        handleHidePlaylist,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => useContext(PlayerContext);
