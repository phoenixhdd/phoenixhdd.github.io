const playSongButton = document.querySelector('.play-song__icon');
const menuContent = document.querySelector('.daft-player__menu');
const playlistContent = document.querySelector('.daft-player__playlist');
const playerHeading = document.querySelector('.daft-player__heading');
const playlistPlayer = document.querySelector('.playlist__play-icon');

function openMenu() {
  if (!menuContent.classList.contains('open')) {
    menuContent.classList.add('open');
    playlistContent.classList.remove('open');
  } else {
    menuContent.classList.remove('open');
  }
}

function openPlaylist() {
  if (!playlistContent.classList.contains('open')) {
    playlistContent.classList.add('open');
    playerHeading.classList.add('hide');
    menuContent.classList.remove('open');
  } else {
    playlistContent.classList.remove('open');
    playerHeading.classList.remove('hide');
  }
}

const waveFormContainer = document.querySelector('.daft-player__waveform');
const applicationWidth = waveFormContainer.clientWidth / 4;

let startProgressBarWidth = 0;
let startWaveFormWidth = 0;

function generateWaveform() {
  const newBar = document.createElement('span');
  const randomHeight = Math.floor(Math.random() * 20) + 15;
  newBar.className = 'daft-player__waveform--bar';
  newBar.style.height = randomHeight + 'px';
  waveFormContainer.appendChild(newBar);
}

function playSong() {
  const songTimeBar = document.querySelector('.daft-player__progress');
  const intervalTime = setInterval(progressBar, 25);
  const waveFormTime = setInterval(waveFormBars, 25);

  if (startProgressBarWidth === 100) {
    startProgressBarWidth = 0;
  }

  if (startWaveFormWidth === applicationWidth) {
    while (waveFormContainer.firstChild) {
      waveFormContainer.removeChild(waveFormContainer.firstChild);
    }
    startWaveFormWidth = 0;
  }

  if (!playSongButton.classList.contains('paused') && !playlistPlayer.classList.contains('paused')) {
    playSongButton.classList.add('paused');
    playlistPlayer.classList.add('paused');
  } else {
    playSongButton.classList.remove('paused');
    playlistPlayer.classList.remove('paused');
  }

  function progressBar() {
    if (startProgressBarWidth >= 100) {
      clearInterval(intervalTime);
      playSongButton.classList.remove('paused');
      playlistPlayer.classList.remove('paused');
    } else {
      startProgressBarWidth++;
      const barWidth = startProgressBarWidth + '%';
      songTimeBar.style.width = barWidth;
    }
  }

  function waveFormBars() {
    if (startWaveFormWidth >= applicationWidth) {
      clearInterval(waveFormTime);
    } else {
      startWaveFormWidth++;
      generateWaveform();
    }
  }
}
