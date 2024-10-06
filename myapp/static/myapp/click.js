document.addEventListener('click', function(event) {
    // 클릭된 요소가 img 태그가 아닌 경우와 input 태그가 아닌 경우 홈으로 리다이렉트
    if (
        event.target.tagName.toLowerCase() !== 'img' &&
        event.target.tagName.toLowerCase() !== 'input' &&
        !event.target.classList.contains('content')
    ) {
        if (window.location.pathname === '/contact/') {
            const leaveConfirmed = confirm("홈으로 이동하면 작성한 내용이 사라집니다. 이동하시겠습니까?");
            if (leaveConfirmed) {
                window.location.href = '/'; // 홈으로 리다이렉트
            }
            // "취소"를 클릭했을 경우 아무 동작도 하지 않음
        } else {
            window.location.href = '/'; // 홈으로 리다이렉트 (루트 경로로 변경)
        }
    }
});
