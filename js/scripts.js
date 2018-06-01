const playSongButton = document.querySelector('.play-song__icon');

const activePlayMusic = () => {
  if(!playSongButton.classList.contains('paused')) {
    playSongButton.classList.add('paused');
  } else {
    playSongButton.classList.remove('paused');
  }
}
