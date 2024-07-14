// FullCalendar를 초기화하고 달력을 설정합니다.
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid'], // dayGrid 플러그인을 사용하여 기본 달력을 생성합니다.
        initialView: 'dayGridMonth', // 초기에 월별 달력을 보여줍니다.
    });
    calendar.render(); // 달력을 렌더링합니다.
});

// 현재 날짜 객체 생성
var currentDate = new Date();

// 달력을 표시할 요소 선택
var calendarContainer = document.querySelector('.calendar');

// 달력을 생성하는 함수
function generateCalendar(year, month) {
  // 달력을 표시할 테이블 요소 생성
  var calendarTable = document.createElement('table');

  // 테이블에 헤더 추가
  var headerRow = calendarTable.insertRow();
  var headerCell = headerRow.insertCell();
  headerCell.colSpan = 7;
  headerCell.textContent = year + '년 ' + (month + 1) + '월';
  headerCell.style.textAlign = 'center';

  // 테이블에 요일 표시
  var daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  var daysRow = calendarTable.insertRow();
  for (var i = 0; i < 7; i++) {
    var dayCell = daysRow.insertCell();
    dayCell.textContent = daysOfWeek[i];
    dayCell.style.textAlign = 'center';
  }

  // 해당 월의 첫째 날의 요일과 마지막 날짜 계산
  var firstDay = new Date(year, month, 1).getDay();
  var lastDate = new Date(year, month + 1, 0).getDate();

  // 날짜를 채워 넣는 반복문
  var date = 1;
  for (var i = 0; i < 6; i++) {
    var weekRow = calendarTable.insertRow();
    for (var j = 0; j < 7; j++) {
      var dateCell = weekRow.insertCell();
      if (i === 0 && j < firstDay) {
        dateCell.textContent = '';
      } else if (date > lastDate) {
        break;
      } else {
        dateCell.textContent = date;
        date++;
      }
      dateCell.style.textAlign = 'center';
    }
  }

  // 생성된 달력을 요소에 추가
  calendarContainer.innerHTML = '';
  calendarContainer.appendChild(calendarTable);
}

// 현재 날짜의 달력을 표시
generateCalendar(currentDate.getFullYear(), currentDate.getMonth());

// 모든 달력 셀(td) 요소를 선택합니다.
const calendarCells = document.querySelectorAll('.calendar td');

// 달력 날짜 클릭시
calendarCells.forEach(cell => {
    cell.addEventListener('click', function() {
        // 여기에 이동할 URL을 지정
        const url = 'https://example.com';
        // 특정 URL로 이동합니다.
        window.location.href = url;
    });
});
