import PropTypes from 'prop-types'
import styles from './SongToAdd.module.scss'

export const SongToAdd = ({ cover_art_url, songToAddIndex }) => {
  return (
    <div className={styles['song-to-add']} song-to-add={songToAddIndex}>
      <img alt='' src={cover_art_url} />

      <button
        className={styles['add-to-playlist-button']}
        song-to-add={songToAddIndex}
      >
        Add To Playlist
      </button>
    </div>
  );
};

SongToAdd.propTypes = {
  cover_art_url: PropTypes.string,
  songToAddIndex: PropTypes.number.isRequired,
};