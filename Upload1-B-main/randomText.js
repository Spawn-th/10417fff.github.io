// 글귀 목록 배열
const quotes = [
    "  I love you to the moon and back",
    "  쌀쌀한 바람 코끝이 찡해져도 기분 좋아",
    "  내 뜻대로 안되는 하루하루가 안개처럼 흐릿하지만 수많은 길이 내 앞에 있어",
    "  매일 속에 그 어느 날 숨차게 지나가는 내일의 그 어느 날",
    "  내가 좋아하는 네가 나를 좋아하는 그런 건 무엇보다 더 대단하고 엄청난 일이야",
    "  꿈꿔온 날에 닿을 때까지",
    "  I'll never let you down",
    "  바란 꿈이 현실로",
    "  숨이 턱 끝까지 차도 we don't stop",
    "  같은 시간 같은 곳에서 반드시 이뤄낼 꿈",
    "  세상의 가장 높은 곳에서 우리 꿈을 크게 외치고 싶어",
    "  서로의 빈칸을 열어둔 채로",
    "  어느새 속도를 내 뛰고 있어",
    "  좋아하는 것을 위해",
    "  늘 혼자였던 내가, 함께라는 말이 좋아",
    "  소원 빌래? 별 떨어진다",
    "  바람 따라가는 구름처럼"
];

// 현재 표시되는 인덱스
let currentIndex = Math.floor(Math.random() * quotes.length); // 랜덤한 인덱스 초기화

// 첫 번째 랜덤 글귀 표시
document.querySelector('.sub-text').textContent = quotes[currentIndex];

// 일정 시간이 지난 후 다음 글귀 표시 함수
function showNextQuote() {
    currentIndex = (currentIndex + 1) % quotes.length; // 다음 인덱스 계산
    document.querySelector('.sub-text').textContent = quotes[currentIndex]; // 다음 글귀 표시
}

// 일정 시간마다 다음 글귀 표시
setInterval(showNextQuote, 5000); // 5000 밀리초(5초)마다 실행
