document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const numbersContainer = document.getElementById('lotto-numbers');
  const themeBtn = document.getElementById('theme-btn');
  const body = document.body;

  // Theme Toggle Logic
  themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    
    themeBtn.querySelector('.icon').textContent = isLight ? '☀️' : '🌙';
    themeBtn.querySelector('.text').textContent = isLight ? '라이트 모드' : '다크 모드';
    
    // Save preference
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeBtn.querySelector('.icon').textContent = '☀️';
    themeBtn.querySelector('.text').textContent = '라이트 모드';
  }

  function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }

  function createBall(number, index) {
    const ball = document.createElement('div');
    ball.className = `number-ball ball-${(index % 6) + 1}`;
    ball.textContent = number;
    ball.style.animationDelay = `${index * 0.1}s`;
    return ball;
  }

  function generateAndDisplay() {
    // Clear previous numbers or placeholder
    numbersContainer.innerHTML = '';
    
    const numbers = generateLottoNumbers();
    
    numbers.forEach((number, index) => {
      const ball = createBall(number, index);
      numbersContainer.appendChild(ball);
    });
  }

  generateBtn.addEventListener('click', () => {
    // Add a small bounce effect to the button
    generateBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      generateBtn.style.transform = '';
      generateAndDisplay();
    }, 100);
  });
});