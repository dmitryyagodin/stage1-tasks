window.addEventListener('keydown', (event) => console.log(event.code));

const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');
const notes = {
  'a' : "./assets/audio/a.mp3",
  'a♯': "./assets/audio/a♯.mp3",
  'b' : "./assets/audio/b.mp3",
  'c' : "./assets/audio/c.mp3",
  'c♯': "./assets/audio/c♯.mp3",
  'd' : "./assets/audio/d.mp3",
  'd♯': "./assets/audio/d♯.mp3",
  'e' : "./assets/audio/e.mp3",
  'f' : "./assets/audio/f.mp3",
  'f♯': "./assets/audio/f♯.mp3",
  'g' : "./assets/audio/g.mp3",
  'g♯': "./assets/audio/g♯.mp3",
}

function playNote(note) {
  sound = new Audio(notes[note])
  sound.play()
}


piano.addEventListener('click', event => {
  console.log(event.target.dataset.note)
  playNote(event.target.dataset.note);
});
