const audio = document.getElementById('audio');
const progressBar = document.getElementById('progress-bar');
const playPauseButton = document.getElementById('play-pause');

playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseButton.textContent = 'Play';
  }
});

audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = progress + '%';
});

audio.addEventListener('loadedmetadata', () => {
  // Optionally set initial progress bar width
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = progress + '%';
});
