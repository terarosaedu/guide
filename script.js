document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');

  function activate(target) {
    tabs.forEach(t => t.classList.toggle('is-active', t.dataset.target === target));
    panels.forEach(p => p.classList.toggle('is-active', p.id === target));
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => activate(tab.dataset.target));
  });

  // 개요 탭 내부의 "매뉴얼 보기" 링크 -> 해당 탭으로 이동
  document.querySelectorAll('[data-goto]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      activate(link.dataset.goto);
    });
  });
});
