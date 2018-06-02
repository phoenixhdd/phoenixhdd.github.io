const playSongButton = document.querySelector('.play-song__icon');
const menuContent = document.querySelector('.daft-player__menu');
const playlistContent = document.querySelector('.daft-player__playlist');
const playerHeading = document.querySelector('.daft-player__heading');
const playlistPlayer = document.querySelector('.playlist__play-icon');

const activePlayMusic = () => {
  console.log('work');
  if(!playSongButton.classList.contains('paused') && !playlistPlayer.classList.contains('paused')) {
    playSongButton.classList.add('paused');
    playlistPlayer.classList.add('paused');
  } else {
    playSongButton.classList.remove('paused');
    playlistPlayer.classList.remove('paused');
  }
}

const openMenu = () => {
  if(!menuContent.classList.contains('open')) {
    menuContent.classList.add('open');
  } else {
    menuContent.classList.remove('open');
  }
}

const openPlaylist = () => {
  if(!playlistContent.classList.contains('open')) {
    playlistContent.classList.add('open');
    playerHeading.classList.add('hide');
  } else {
    playlistContent.classList.remove('open');
    playerHeading.classList.remove('hide');
  }
}
