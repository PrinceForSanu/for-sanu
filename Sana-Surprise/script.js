document.addEventListener("DOMContentLoaded", function () {
  // Slideshow logic
  let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}

setInterval(showSlides, 3000); // change slide every 3s
slides[0].classList.add('active'); // start from first

  showSlides();

  // Typewriter effect
  const typewriterText = [
    "Your smile lights up my world, Sana 💖",
    "Every heartbeat whispers your name 💌",
    "This is just a small surprise… but all of it is you ❤️"
  ];
  let lineIndex = 0, charIndex = 0;

  function typeLine() {
    const typewriter = document.getElementById("typewriter");
    if (lineIndex < typewriterText.length) {
      if (charIndex < typewriterText[lineIndex].length) {
        typewriter.innerHTML += typewriterText[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeLine, 60);
      } else {
        setTimeout(() => {
          typewriter.innerHTML = "";
          charIndex = 0;
          lineIndex = (lineIndex + 1) % typewriterText.length;
          typeLine();
        }, 2000);
      }
    }
  }
  typeLine();

  // Music toggle
  const bgMusic = document.getElementById("bg-music");
  const playPauseBtn = document.getElementById("playPauseBtn");

  playPauseBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      playPauseBtn.textContent = "Pause Music";
    } else {
      bgMusic.pause();
      playPauseBtn.textContent = "Play Music";
    }
  });

  // Auto-play music on any interaction
  document.body.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play().catch(() => {});
    }
  });

  // Start screen logic
  const startScreen = document.getElementById("start-screen");
  const content = document.getElementById("main-content");

  document.getElementById("startBtn").addEventListener("click", () => {
    startScreen.style.display = "none";
    content.style.display = "block";
    bgMusic.play().catch(() => {});
  });
});
