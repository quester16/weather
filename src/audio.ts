import AudioPlayer from "./AudioPlayer";

const rain = document.querySelector("[data-weather='rainy']");
const summer = document.querySelector("[data-weather='summer']");
const winter = document.querySelector("[data-weather='winter']");

let currentPlayer: AudioPlayer | null = null;

const rainAudio = new AudioPlayer();
rainAudio.setAudioSelector(".rainy");
const summerAudio = new AudioPlayer();
summerAudio.setAudioSelector(".summer");
const winterAudio = new AudioPlayer();
winterAudio.setAudioSelector(".winter");

function setBackground(url: string) {
  const wrapper = document.getElementById("wrapper");
  wrapper?.style.setProperty("--bg", `url(${url})`);
}
setBackground("../assets/rainy-bg.jpg");

const volumeSlider = document.getElementById("slider");
volumeSlider?.addEventListener("input", (e: Event) => {
  const target = e.target as HTMLInputElement;
  const targetVolume = parseFloat(target.value) / 100;
  if (currentPlayer) currentPlayer.setVolume(targetVolume);
});

rain?.addEventListener("click", async () => {
  setBackground("../assets/rainy-bg.jpg");

  controlAudio(rainAudio);
});

summer?.addEventListener("click", async () => {
  setBackground("../assets/summer-bg.jpg");

  controlAudio(summerAudio);
});

winter?.addEventListener("click", async () => {
  setBackground("../assets/winter-bg.jpg");

  controlAudio(winterAudio);
});

function controlAudio(player: AudioPlayer) {
  if (currentPlayer === player)
    if (player.isPlaying) player.pause();
    else player.start();
  else {
    if (currentPlayer) currentPlayer.pause();
    player.start();
    currentPlayer = player;
  }
}
