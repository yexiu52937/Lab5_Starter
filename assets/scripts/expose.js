// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const img = document.querySelector('img');
  const selectElement = document.querySelector('#horn-select');
  var audio = document.querySelector('audio');
  var volume = document.getElementById('volume-controls').querySelector('input');
  var volumeImg = document.getElementById('volume-controls').querySelector('img');
  audio.volume=volume.value/100;
  
  selectElement.addEventListener('change', (event) => {
    img.src = `assets/images/${event.target.value}.svg`;
    audio.src = `assets/audio/${event.target.value}.mp3`;
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
      if(event.target.value=="party-horn") {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
        audio.play();
      }
      else audio.play();
    })
  })

  
  volume.addEventListener('input', () => {
    if(volume.value==0) {
      volumeImg.src="assets/icons/volume-level-0.svg";
      volumeImg.alt="Volume level 0";
    }
    else if(1<=volume.value&&volume.value<33) {
      volumeImg.src="assets/icons/volume-level-1.svg";
      volumeImg.alt="Volume level 1";
    }
    else if(33<=volume.value&&volume.value<67) {
      volumeImg.src="assets/icons/volume-level-2.svg";
      volumeImg.alt="Volume level 2";
    }
    else if(67<=volume.value) {
      volumeImg.src="assets/icons/volume-level-3.svg";
      volumeImg.alt="Volume level 3";
    }
    audio.volume=volume.value/100;
  })
  
}

