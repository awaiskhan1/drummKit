window.addEventListener('keydown',(e) =>{
    const MusicCode = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keyAtributes = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!MusicCode) return;  //stop audio
    MusicCode.currentTime = 0; // rewind to start
    MusicCode.play();
    keyAtributes.classList.add('playing');
});

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const selectKeys = document.querySelectorAll('.key');
selectKeys.forEach(key => key.addEventListener('transitionend', removeTransition));

const input = document.querySelector('.topSection input');

input.addEventListener('change',handleUpdate);
 function handleUpdate(){
     const name = this.name;
     const changeValue = this.value;
    document.documentElement.style.setProperty(`--${this.name}`,this.value);
 }