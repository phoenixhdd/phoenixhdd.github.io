const playSongButton = document.querySelector('.play-song__icon');
const menuContent = document.querySelector('.daft-player__menu');
const playlistContent = document.querySelector('.daft-player__playlist');
const playerHeading = document.querySelector('.daft-player__heading');
const playlistPlayer = document.querySelector('.playlist__play-icon');

function activePlayMusic() {
  if (!playSongButton.classList.contains('paused') && !playlistPlayer.classList.contains('paused')) {
    playSongButton.classList.add('paused');
    playlistPlayer.classList.add('paused');
    playSong();
  } else {
    playSongButton.classList.remove('paused');
    playlistPlayer.classList.remove('paused');
  }
}

function openMenu() {
  if (!menuContent.classList.contains('open')) {
    menuContent.classList.add('open');
  } else {
    menuContent.classList.remove('open');
  }
}

function openPlaylist() {
  if (!playlistContent.classList.contains('open')) {
    playlistContent.classList.add('open');
    playerHeading.classList.add('hide');
  } else {
    playlistContent.classList.remove('open');
    playerHeading.classList.remove('hide');
  }
}

// Here I create function which generate random height for a waveform bar
const waveformBar = document.getElementById('waveformBar');
const waveFormContainer = document.querySelector('.daft-player__waveform');
const applicationWidth = document.body.clientWidth / 4;

let startWaveFormWidth = 0;
let i = 0;

const generateWaveform = () => {
  const randomHeight = Math.floor(Math.random() * 20) + 15;
  const newBar = document.createElement('span');
  newBar.className = 'daft-player__waveform--bar';
  newBar.style.height = randomHeight + 'px';
  waveFormContainer.appendChild(newBar);
}

for (let i = 0; i <= applicationWidth; i++) {
  (function() {
    setTimeout(function() { }, i * 1000);
  })(i);
  const randomHeight = Math.floor(Math.random() * 20) + 15;
  waveformBar.style.height = randomHeight + 'px';
  generateWaveform();
}


function playSong() {
  const intervalTime = setInterval(frame, 10);
  const randomHeight = Math.floor(Math.random() * 20) + 15;
  const songTimeBar = document.querySelector('.daft-player__progress');
  const newBar = document.createElement('span');
  newBar.className = 'daft-player__waveform--bar';
  newBar.style.height = randomHeight + 'px';

  function frame() {
    if (startWaveFormWidth >= 100) {
      clearInterval(intervalTime);
    } else {
      startWaveFormWidth++;
      const barWidth = startWaveFormWidth + '%';
      songTimeBar.style.width = barWidth;
    }
  }
}

