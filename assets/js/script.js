let lastScrollTop = 0;

// 페이지 로드 시 헤더 보이게 하기
window.addEventListener('load', () => {
    const header = document.querySelector('header');
    header.style.transform = 'translateY(0)'; // 페이지 로드 시 보이게
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // 스크롤 내릴 때
        header.style.transform = 'translateY(-100%)'; // 헤더 숨김
    } else {
        // 스크롤 올릴 때
        header.style.transform = 'translateY(0)';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // for Mobile or negative scrolling
});
// 모달창 열기
document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';

        // 작업기여도 게이지 애니메이션
        const progressBarFill = modal.querySelector('.progress-bar-fill');
        const targetWidth = parseInt(progressBarFill.style.width, 10); // 목표 기여도 (%)
        let currentWidth = 0; // 초기 기여도 (0%)

        // 게이지 증가 함수
        function increaseWidth() {
            if (currentWidth < targetWidth) {
                currentWidth++; // 기여도 1%씩 증가
                progressBarFill.style.width = currentWidth + '%';
                setTimeout(increaseWidth, 20); // 20ms마다 재귀적으로 호출
            }
        }

        // 애니메이션 시작
        increaseWidth();
    });
});

// 모달창 닫기
document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

// 모달 외부 클릭 시 닫기
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// 사이드 이동
document.querySelector('.buttons button').addEventListener('click', function() {
    window.location.href = 'https://yourwebsite.com';
});