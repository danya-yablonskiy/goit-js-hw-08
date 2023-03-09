import throttle from "lodash.throttle";
import Player from '@vimeo/player';



const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const time = player.on('timeupdate', throttle(function(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}, 1000));

const array = JSON.parse(localStorage.getItem('videoplayer-current-time'));
const currentTime = array['seconds'];

player.setCurrentTime(currentTime);
