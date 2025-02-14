const target = document.getElementById('target');
const gameContainer = document.getElementById('game-container');

let escapeCount = 0; // Kaçış sayacı

function getRandomPosition() {
  const containerWidth = gameContainer.offsetWidth - target.offsetWidth;
  const containerHeight = gameContainer.offsetHeight - target.offsetHeight;

  const randomX = Math.floor(Math.random() * containerWidth);
  const randomY = Math.floor(Math.random() * containerHeight);

  return { x: randomX, y: randomY };
}

target.addEventListener('mouseover', () => {
  if (escapeCount < 3) { // 3 kez kaçabilir
    const newPosition = getRandomPosition();
    target.style.position = 'absolute';
    target.style.left = `${newPosition.x}px`;
    target.style.top = `${newPosition.y}px`;

    escapeCount++; // Kaçış sayısını artır
  }
});

target.addEventListener('click', () => {
  target.style.display = 'none'; // Butonu gizle
  showPopup(); // Popup'ı göster
});

function showPopup() {
  // Popup kutusunu oluştur
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <p>Seni her şeyden daha çok seviyorum! 💖</p>
    <button id="closePopup">Kapat</button>
  `;

  document.body.appendChild(popup);

  // Kapatma butonu için event listener ekleyelim
  document.getElementById('closePopup').addEventListener('click', () => {
    popup.remove();
  });

  createHearts(); // Kalpleri ekleyelim
}

function createHearts() {
  for (let i = 0; i < 30; i++) { // 30 tane kalp oluştur
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = "❤️"; // Kalp emojisi
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove(); // Kalpler bir süre sonra kaybolsun
    }, 5000);
  }
}
