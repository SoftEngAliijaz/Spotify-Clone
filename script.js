const playPauseButton = document.getElementById("play-pause");
const playPauseIcon = playPauseButton.querySelector("img");

let isPlaying = false;

playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        playPauseIcon.src = "./assets/icons/play.svg";
        isPlaying = false;
    } else {
        playPauseIcon.src = "./assets/icons/pause.svg";
        isPlaying = true;
    }
});
