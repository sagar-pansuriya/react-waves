import { v4 as uuidv4 } from "uuid";

const getChilHops = () => {
  return [
    {
      id: uuidv4(),
      name: "Surfloop",
      artist: "Philanthrope, mommy, HM Surf",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27485",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/10/1f90f966219973433f4bf9f4910893028abc4360-300x300.jpg",
      color: ["#38A6D4", "#D9879A"],
      active: true,
    },
    {
      id: uuidv4(),
      name: "Beaver Creek",
      artist: "Aso, Middle School, Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Daylight",
      artist: "Aiguille",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Keep Going",
      artist: "Swørn",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Nightfall",
      artist: "Aiguille",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Reflection",
      artist: "Swørn",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Under the City Stars",
      artist: "Aso, Middle School, Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      active: false,
    },
  ];
};

const activeInactive = (songs, id) => {
  return songs.map((song) => {
    if (song.id === id) {
      song.active = true;
    } else {
      song.active = false;
    }
    return song;
  });
};

export { getChilHops, activeInactive };
