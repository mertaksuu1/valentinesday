function createHearts() {
    setInterval(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = "❤️ ❤ 🌸 💕";
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
  
      document.body.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, 500); // Yarım saniyede bir kalp ekle
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    createHearts();
  });
  