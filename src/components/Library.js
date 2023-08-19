import React from "react";
import { v4 as uuidv4 } from "uuid";
import LibrarySong from "./LibrarySong";

const Library = (props) => {
  const {
    songs,
    setSongs,
    setCurrentSong,
    isPlaying,
    audioRef,
    isLibraryShown,
  } = props;
  return (
    <div className={`library ${isLibraryShown ? "active" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={uuidv4()}
            song={song}
            songs={songs}
            setSongs={setSongs}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
