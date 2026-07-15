// 画面のスクロールを監視して要素を浮かび上がらせる設定
const fadeElements = document.querySelectorAll('.js-fade');

const options = {
    root: null, // 画面（ビューポート）を基準にする
    rootMargin: '0px 0px -10% 0px', // 画面の下から10%入った位置で反応させる
    threshold: 0 // 要素が少しでも画面に入ったら実行
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // 要素が画面内に入ってきたら
        if (entry.isIntersecting) {
            // 「is-active」というクラスを付与する
            entry.target.classList.add('is-active');
            // 一度アニメーションしたら監視をやめる（何度も動かしたい場合はこの行を消す）
            observer.unobserve(entry.target);
        }
    });
}, options);

// すべての「js-fade」が付いた要素を監視対象に登録する
fadeElements.forEach(el => {
    observer.observe(el);
});
