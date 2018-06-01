const waveformBar = document.getElementById('waveformBar');
const waveFormContainer = document.querySelector('.daft-player__waveform');
const applicationWidth = document.body.clientWidth / 4;

const generateWaveform = () => {
  const randomHeight = Math.floor(Math.random() * 40) + 15;
  const newBar = document.createElement('span');
  newBar.className = 'daft-player__waveform--bar';
  newBar.style.height = randomHeight + 'px';
  waveFormContainer.appendChild(newBar);
}

for (let i = 0; i <= applicationWidth; i++) {
  (function() {
    setTimeout(function() { }, i * 1000);
  })(i);
  const randomHeight = Math.floor(Math.random() * 40) + 15;
  waveformBar.style.height = randomHeight + 'px';
  generateWaveform();
}
