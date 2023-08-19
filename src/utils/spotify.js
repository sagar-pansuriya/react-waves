const API_KEY = "a758498d3267410da00a0c414b5b6802";
const BASE_URL = "https://api.spotify.com/v1/";

const getData = fetch("https://api.spotify.com/v1/audio-analysis/" + API_KEY)
  .then((response) => response.json())
  .then(({ beats }) => {
    beats.forEach((beat, index) => {
      console.log(`Beat ${index} starts at ${beat.start}`);
    });
  });
