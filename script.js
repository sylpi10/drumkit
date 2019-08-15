
function playSound (event) {
    let audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
    let key = document.querySelector(`.key[data-key = "${event.keyCode}"]`);
    if (!audio) return; // stop fn run alltogether
    audio.currentTime = 0; // rewind to start
    audio.play();
    key.classList.add('playing');
}

function removeTransition (e) {
    if(e.propertyName !== 'transform') return; //skip if not a tranf
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

addEventListener('keydown', playSound);
