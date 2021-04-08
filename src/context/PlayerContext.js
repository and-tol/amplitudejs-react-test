import { createContext, useContext, useEffect, useState } from 'react';

import { initialData } from '../initialData';

export const PlayerContext = createContext(null);

export const PlayerProvider = ({ children }) => {
  const [songs, setSongs] = useState(initialData.songs || null);
  const [playlists, setPlaylists] = useState(initialData.playlists || null);
  const [playlist, setPlaylist] = useState('emancipator' || null);
  const [playlistName, setPlaylistName] = useState(
    initialData.playlists[playlist].playlistName || null
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

  return (
    <PlayerContext.Provider
      value={{
        initialData,
        songs,
        playlists,
        playlist,
        setPlaylist,
        playlistName,
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
