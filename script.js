* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Dancing Script', cursive;
}

body {
  overflow: hidden;
  background:
    linear-gradient(rgba(255,228,236,.9), rgba(200,247,244,.9)),
    url("bg-hearts.png");
  background-size: cover;
  background-position: center;
  color: #222;
}

/* ESCENAS + FADE CINEMATIC */
.scene {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s ease, visibility 1s ease;
  z-index: 1;
}

.scene.active {
  opacity: 1;
  visibility: visible;
}

/* PÉTALOS */
.petals {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.petals span {
  position: absolute;
  top: -10%;
  width: 14px;
  height: 14px;
  background: rgba(255,182,193,.8);
  border-radius: 50%;
  animation: fall linear infinite;
}

.petals span:nth-child(odd) {
  background: rgba(255,105,180,.7);
}

.petals span:nth-child(1){left:5%;animation-duration:9s}
.petals span:nth-child(2){left:15%;animation-duration:11s}
.petals span:nth-child(3){left:25%;animation-duration:10s}
.petals span:nth-child(4){left:35%;animation-duration:12s}
.petals span:nth-child(5){left:45%;animation-duration:9s}
.petals span:nth-child(6){left:55%;animation-duration:11s}
.petals span:nth-child(7){left:65%;animation-duration:10s}
.petals span:nth-child(8){left:75%;animation-duration:12s}
.petals span:nth-child(9){left:85%;animation-duration:9s}
.petals span:nth-child(10){left:95%;animation-duration:11s}

@keyframes fall {
  to { transform: translateY(120vh) rotate(360deg); }
}

/* SOBRE */
.envelope {
  position: relative;
  width: 280px;
  height: 180px;
}

.back {
  position: absolute;
  inset: 0;
  background: #8b0000;
  border-radius: 10px;
}

.front {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60%;
  background: #a00000;
  clip-path: polygon(0 100%,50% 0,100% 100%);
}

.flap {
  position: absolute;
  top: 0;
  width: 100%;
  height: 60%;
  background: #b00000;
  clip-path: polygon(0 0,50% 100%,100% 0);
  transform-origin: top;
  transition: transform 1.3s ease;
}

.paper {
  position: absolute;
  width: 92%;
  height: 90%;
  background: #fff;
  top: 5%;
  left: 4%;
  transform: translateY(45%);
  transition: transform 1.3s ease;
}

.seal {
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 28px;
}

.envelope.open .flap { transform: rotateX(180deg); }
.envelope.open .paper { transform: translateY(-20%); }

.subtitle { margin-top: 25px; }

/* CARTA */
.letter {
  background: #fff;
  padding: 40px;
  width: 70%;
}

.type { opacity: 0; animation: fadeIn 2s forwards; }
.delay { animation-delay: 1.5s; }

@keyframes fadeIn { to { opacity: 1; } }

/* BOTONES */
.continue-btn {
  margin-top: 25px;
  padding: 12px 28px;
  background: #ff5a7a;
  color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
}

/* GALERÍA */
.gallery-img {
  width: 260px;
  height: 360px;
  object-fit: cover;
  border-radius: 16px;
}

#phrase { font-size: 28px; padding: 40px; }

#noBtn { position: relative; }

/* FINAL */
.plane { font-size: 50px; animation: fly 4s forwards; }

@keyframes fly {
  from { transform: translateX(-100vw); }
  to { transform: translateX(100vw); }
}

.final-img {
  width: 200px;
  border-radius: 50%;
}

/* MÓVIL */
@media (max-width: 768px) {

  body {
    font-size: 20px;
  }

  /* SOBRE MÁS GRANDE */
  .envelope {
    width: 85vw;
    height: 55vw;
    max-width: 340px;
    max-height: 220px;
  }

  .seal {
    font-size: 34px;
  }

  .subtitle {
    font-size: 20px;
    padding: 0 20px;
  }

  /* CARTA */
  .letter {
    width: 90%;
    padding: 30px;
    font-size: 22px;
  }

  /* IMÁGENES */
  .gallery-img {
    width: 80vw;
    height: 60vh;
    max-width: 320px;
    max-height: 420px;
  }

  .gallery-text {
    font-size: 22px;
    padding: 0 20px;
  }

  /* FRASES */
  #phrase {
    font-size: 26px;
    padding: 25px;
  }

  /* BOTONES */
  .continue-btn,
  .buttons button {
    width: 85%;
    font-size: 20px;
    padding: 16px;
  }

  h1 {
    font-size: 30px;
    padding: 0 20px;
  }

  /* FINAL */
  .final-img {
    width: 70vw;
    max-width: 240px;
  }

  .plane {
    font-size: 60px;
  }
}
