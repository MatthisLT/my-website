// Easter links
function updateCustomCursor(e) {
  document.documentElement.style.setProperty(
    '--cursor',
    `image-set("./cursor-${e.target.getAttribute('data-cursor-name')}_1x.webp" 1x, "./cursor-${e.target.getAttribute('data-cursor-name')}_2x.webp" 2x)`
  );
}

function removeCustomCursor() {
  document.documentElement.style.removeProperty('--cursor');
}

if (window.matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('.easter-link').forEach((link) => {
    link.addEventListener('mouseenter', updateCustomCursor);
    link.addEventListener('mouseleave', removeCustomCursor);
  });
}

// Konami code
const patternToMatch = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];
let currentStrike = [];

function registerKey(key) {
  currentStrike.push(key);

  if (currentStrike.length === patternToMatch.length) {
    completeKonamiCode();
  }
}

function resetStrike() {
  currentStrike = [];
}

function completeKonamiCode() {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_self');
  resetStrike();
}

function handleKeyUp(e) {
  if (e.key === patternToMatch[currentStrike.length]) {
    registerKey(e.key);
  } else {
    resetStrike();
  }
}

document.addEventListener('keyup', handleKeyUp);
