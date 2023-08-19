import React, { useState, useRef } from "react";

import Song from "./components/Song";
import Player from "./components/Player";

import "./styles/app.scss";
import { getChilHops } from "./utils/songs.util";
import Library from "./components/Library";
import NavBar from "./components/NavBar";

function App() {
  const [songs, setSongs] = useState(getChilHops());
  const initialSong = songs[0];
  const [currentSong, setCurrentSong] = useState(initialSong);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLibraryShown, setIsLibraryShown] = useState(false);
  // ? Reference
  const audioRef = useRef(null);

  return (
    <div className={`App ${isLibraryShown ? "library-active" : ""}`}>
      <NavBar
        setIsLibraryShown={setIsLibraryShown}
        isLibraryShown={isLibraryShown}
      />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        isLibraryShown={isLibraryShown}
      />
    </div>
  );
}

export default App;
