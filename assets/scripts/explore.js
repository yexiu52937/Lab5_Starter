// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var synth = window.speechSynthesis;
  var voiceSelect = document.querySelector('#voice-select');
  var voices = [];
  var img = document.querySelector('img');

  function populateVoiceList() {
    voices = synth.getVoices();
    for(var i=0; i<voices.length; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      option.setAttribute('value', voices[i].name);
      option.setAttribute('data-lang', voices[i].lang);
      voiceSelect.appendChild(option);
    }
  }

  setTimeout(()=>{populateVoiceList()});

    const button = document.querySelector('button');
    button.addEventListener('click', () => {
      var textRead = document.getElementById('text-to-speak').value;
    var utterThis = new SpeechSynthesisUtterance(textRead);
    var selectedOption = event.target.value;
    utterThis.lang = voiceSelect.selectedOptions[0].getAttribute('data-lang');
    utterThis.volume = 1;
    utterThis.rate = 1;
    for(var i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    }
      
    synth.speak(utterThis);
    if(synth.speaking){
      img.src = "assets/images/smiling-open.png";
    }
    utterThis.addEventListener('end', () => {
      img.src = "assets/images/smiling.png";
    });
  })

  
  
  
}