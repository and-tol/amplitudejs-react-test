import { initialData } from './initialData';
import { Song } from './Song';

export const Playlist = () => {
  return (
    <div className='white-player-playlist'>
      {initialData.songs.map(song => {
        return (
          <Song
            key={song.name}
            cover_art_url={song.cover_art_url}
            name={song.name}
            artist={song.artist}
            album={song.album}
          />
        );
      })}
    </div>
  );
};
