import React from "react";
import { activeInactive } from "../utils/songs.util";

const LibrarySong = (props) => {
  const { song, songs, setSongs, isPlaying, setCurrentSong, audioRef } = props;

  const songSelectHandler = async () => {
    await setCurrentSong(song);
    if (isPlaying) {
      audioRef.current.play();
    }
    setSongs(activeInactive(songs, song.id));
  };

  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt="Song Cover" />
      <div className="library-song-info">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
