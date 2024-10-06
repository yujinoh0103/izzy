const hoverImages = document.querySelectorAll('.hover-target');

hoverImages.forEach(image => {
  image.addEventListener('mouseover', () => {
    // 동일한 id를 가진 .red 클래스 요소를 선택하여 보이게 설정
    const redElement = document.querySelector(`.red#${image.id}`);
    if (redElement) {
      redElement.classList.add('visible'); // 해당 SVG 요소를 보이게 설정
    }

    const pElement = document.querySelector(`p#${image.id}`);
    if (pElement) {
      pElement.classList.add('visible');
    }

    // 이미지 src를 바꾸기
    image.dataset.originalSrc = image.src; // 원본 src를 데이터 속성에 저장
    image.src = `/static/myapp/img/${image.id}-hover.png`; // hover 상태에서의 이미지 경로
  });

  image.addEventListener('mouseout', () => {
    // 동일한 id를 가진 .red 클래스 요소를 선택하여 숨기기
    const redElement = document.querySelector(`.red#${image.id}`);
    if (redElement) {
      redElement.classList.remove('visible'); // 해당 SVG 요소를 숨김
    }

    const pElement = document.querySelector(`p#${image.id}`);
    if (pElement) {
      pElement.classList.remove('visible');
    }

    // 이미지 src를 원래대로 복원하기
    if (image.dataset.originalSrc) {
      image.src = image.dataset.originalSrc; // 원본 src로 복원
    }
  });
});


