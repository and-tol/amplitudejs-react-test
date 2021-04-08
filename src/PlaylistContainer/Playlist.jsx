import { Song } from './Song';

export const Playlist = ({ songs }) => {
  return (
    <div className='playlist'>
      {songs.map(song => {
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
