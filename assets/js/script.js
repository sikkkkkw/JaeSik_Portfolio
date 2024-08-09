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

// 모달창
document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
