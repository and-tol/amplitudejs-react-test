import PropTypes from 'prop-types'
import { Song } from './Song';

export const Playlist = ({ songs, playlist }) => {
  return (
    <div className='playlist'>
      {songs.map((song, i) => {
        return (
          <Song
            key={song.name}
            songIndex={i}
            playlist={playlist}
            cover_art_url={null || song.cover_art_url}
            name={song.name}
            artist={song.artist}
            album={song.album}
          />
        );
      })}
    </div>
  );
};

Playlist.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.string),
  playlist: PropTypes.string,
};