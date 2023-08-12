import Player from '@vimeo/player';

// Select with the DOM API
const iframe = document.querySelector('iframe');

const player = new Player(iframe);
console.log(iframe);

player.on('pause', function () {
  console.log(player.getCurrentTime());
  localStorage.setItem('1', 'player');
});
