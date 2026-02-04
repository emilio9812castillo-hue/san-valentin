let currentScene = 1;

/* TRANSICIÓN CINEMÁTICA */
function showScene(n) {
  const current = document.querySelector('.scene.active');
  if (current) current.classList.remove('active');

  setTimeout(() => {
    document.getElementById(`scene${n}`).classList.add('active');
  }, 300);

  currentScene = n;
}

/* SOBRE */
function openEnvelope() {
  document.querySelector('.envelope').classList.add('open');
  document.getElementById('music').play();
  setTimeout(() => showScene(2), 1600);
}

function nextScene() {
  showScene(currentScene + 1);
}

/* GALERÍA */
let galleryIndex = 0;
const gallery = [
  {
    src: 'img1.jpg',
    text: '<strong>Aquí empezó todo.</strong><br>Y sin darme cuenta, empezaste a ser mi lugar favorito.'
  },
  {
    src: 'img2.jpg',
    text: '<strong>Aquí entendí que no era casualidad.</strong><br>Era destino, era calma, eras tú.'
  },
  {
    src: 'img3.jpg',
    text: '<strong>Y aquí supe que te elegiría todos los días.</strong><br>Incluso en los días difíciles. Incluso sin decir nada.'
  }
];

function nextGallery() {
  galleryIndex++;
  if (galleryIndex < gallery.length) {
    galleryImage.src = gallery[galleryIndex].src;
    galleryText.innerHTML = gallery[galleryIndex].text;
  } else {
    showScene(4);
  }
}

/* FRASES */
const phrases = [
  'No todo en la vida es perfecto…',
  'Pero contigo, todo se siente correcto.',
  'Eres mi tranquilidad, mi risa favorita, mi hogar.',
  'Y hoy quiero preguntarte algo.'
];

let phraseIndex = 0;
phrase.innerText = phrases[0];

function nextPhrase() {
  phraseIndex++;
  if (phraseIndex < phrases.length) {
    phrase.innerText = phrases[phraseIndex];
  } else {
    showScene(5);
  }
}

/* BOTÓN NO */
noBtn.addEventListener('mouseenter', () => {
  noBtn.style.transform =
    `translate(${Math.random()*300-150}px,${Math.random()*200-100}px)`;
});

/* ACEPTAR */
function accept() {
  showScene(6);
  setTimeout(() => showScene(7), 2500);
  setTimeout(() => showScene(8), 5000);
}
