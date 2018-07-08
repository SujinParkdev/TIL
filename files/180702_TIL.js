// 문서객체 참조 (초기화 시키기)
var monky = null;

function init() {
  monkys = el('.link.is-monkeys');
  monkys.addEventListener('click', toggleMonkysMotion);
}

function toggleMonkysMotion(e) {
  // 이벤트 객체의 기본동작 차단(<a href>때문에 이동하려는 속성)
  e.preventDefault();
  console.log('click!')
  // e.target이 클릭 이벤트가 발생한 타겟을 찾아준다.
  var target = e.target;
  target.src = ''

}