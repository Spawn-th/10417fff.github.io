// 현재 보여지는 슬라이드의 인덱스
let currentSlide = 0;

// 모든 슬라이드 요소들
const slides = document.querySelectorAll('.slide');

// 이전 버튼 클릭 시
document.querySelector('.prev').addEventListener('click', function() {
    showSlide(currentSlide - 1);
});

// 다음 버튼 클릭 시
document.querySelector('.next').addEventListener('click', function() {
    showSlide(currentSlide + 1);
});

// 슬라이드 표시 함수
function showSlide(index) {
    // 모든 슬라이드 숨기기
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // 인덱스 갱신
    currentSlide = (index + slides.length) % slides.length;

    // 해당 인덱스의 슬라이드 보여주기
    slides[currentSlide].style.display = 'block';
}

// 초기에 첫 번째 슬라이드 보여주기
showSlide(0);

// 자동으로 다음 슬라이드로 이동하는 함수
function autoSlide() {
    showSlide(currentSlide + 1);
    setTimeout(autoSlide, 4000); // 5초마다 자동으로 슬라이드 변경
}

// 페이지 로드 후 자동 슬라이드 시작
autoSlide();
