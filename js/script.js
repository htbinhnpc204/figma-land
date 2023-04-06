const player = document.getElementById('video-player');
const playBtn = document.getElementById('btn-play');

player.addEventListener('click', function () {
    if (player.paused){
        player.play()
        player.style.opacity = 1
        playBtn.style.display = 'none'
    }else{
        player.pause()
        player.style.opacity = 0.3
        playBtn.style.display = 'block'
    }
})

