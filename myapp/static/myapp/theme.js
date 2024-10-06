document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-mode');
  const themeImage = document.getElementById('theme-image');

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      themeImage.src = '/static/myapp/images/dark-image.png'; // 다크 모드 이미지 경로
    } else {
      document.body.classList.remove('dark-mode');
      themeImage.src = '/static/myapp/images/light-image.png'; // 라이트 모드 이미지 경로
    }
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme('light'); // 기본 모드
  }

  toggleButton.addEventListener('click', function () {
    const newTheme = document.body.classList.toggle('dark-mode') ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
});
