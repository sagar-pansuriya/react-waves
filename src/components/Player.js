import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
// import GlobalStyle from "./GlobalStyle";
import { activeInactive } from "../utils/songs.util";
import { formatTime } from "../utils/utils";

const Player = (props) => {
  const {
    currentSong,
    isPlaying,
    setIsPlaying,
    audioRef,
    songs,
    setCurrentSong,
    setSongs,
  } = props;

  // ? State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    percentageCompelete: 0,
  });

  // ? Handler
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundCurrent = Math.round(current);
    const roundDuration = Math.round(duration);
    const percentage = Math.round((roundCurrent * 100) / roundDuration);

    setSongInfo({
      currentTime: current,
      duration: duration,
      percentageCompelete: percentage,
    });
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    });
  };

  const skipTrackHandler = async (direction) => {
    const currentTrack = songs.findIndex((song) => song.id === currentSong.id);
    const nextTrack = currentTrack === songs.length - 1 ? 0 : currentTrack + 1;
    const prevTrack = currentTrack === 0 ? songs.length - 1 : currentTrack - 1;

    if (direction === "skip-back") {
      await setCurrentSong(songs[prevTrack]);
      setSongs(activeInactive(songs, songs[prevTrack].id));
    } else if (direction === "skip-forward") {
      await setCurrentSong(songs[nextTrack]);
      setSongs(activeInactive(songs, songs[nextTrack].id));
    }
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const songEndHandler = async (e) => {
    const currentTrack = songs.findIndex((song) => song.id === currentSong.id);
    const nextTrack = currentTrack === songs.length - 1 ? 0 : currentTrack + 1;

    await setCurrentSong(songs[nextTrack]);
    setSongs(activeInactive(songs, songs[nextTrack].id));

    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const translationStyle = {
    background: `linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`,
    width: `${songInfo.percentageCompelete}%`,
  };

  return (
    <div className="player">
      {/* <GlobalStyle right={currentSong.color[0]} left={currentSong.color[1]} /> */}
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <div className="track">
          <input
            type="range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          <div className="animation-track" style={translationStyle}></div>
        </div>
        <p>{songInfo.duration ? formatTime(songInfo.duration) : "0:00"}</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          icon={faAngleLeft}
          size="2x"
          className="skip-back"
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          className="play"
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          icon={faAngleRight}
          size="2x"
          className="skip-forward"
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
};

export default Player;
