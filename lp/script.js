// HTMLから要素を特定するための設定
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const menuOverlay = document.getElementById('menu-overlay');

// 3本線ボタンをクリックしたらメニューを開く（クラスを追加）
openBtn.addEventListener('click', () => {
  menuOverlay.classList.add('is-open');
});

// ×ボタンをクリックしたらメニューを閉じる（クラスを削除）
closeBtn.addEventListener('click', () => {
  menuOverlay.classList.remove('is-open');
});