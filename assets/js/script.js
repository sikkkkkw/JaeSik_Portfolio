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
// 로딩
window.addEventListener('load', function() {
    // 페이지 로드 완료 시 로딩 화면을 숨김
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
});
// 스크롤 내리면 띄우기
document.addEventListener('DOMContentLoaded', function () {
    const resumesSection = document.getElementById('resume');
    const aboutsSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');

    function handleScroll() {
        const viewportHeight = window.innerHeight;

        // 교육 섹션
        const resumeTop = resumesSection.getBoundingClientRect().top;
        if (resumeTop < viewportHeight * 0.75) {
            resumesSection.classList.add('fade-in');
        } else {
            resumesSection.classList.remove('fade-in');
        }

        // 소개 섹션
        const aboutTop = aboutsSection.getBoundingClientRect().top;
        if (aboutTop < viewportHeight * 0.75) {
            aboutsSection.classList.add('fade-in');
        } else {
            aboutsSection.classList.remove('fade-in');
        }

        // 프로젝트 섹션
        const projectsTop = projectsSection.getBoundingClientRect().top;
        if (projectsTop < viewportHeight * 0.75) {
            projectsSection.classList.add('fade-in');
        } else {
            projectsSection.classList.remove('fade-in');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check the initial scroll position
});
// 년도별 필터
document.getElementById('yearFilter').addEventListener('change', function() {
    const selectedYear = this.value;
    const projects = document.querySelectorAll('.project-bottom');

    projects.forEach(project => {
        if (selectedYear === 'all') {
            project.style.display = 'block';
        } else if (project.dataset.year === selectedYear) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
});
// 클릭 비활성화
document.getElementById('disabledLink').addEventListener('click', function(event) {
    event.preventDefault();
    alert('이 링크는 현재 비활성화되어 있습니다.');
});