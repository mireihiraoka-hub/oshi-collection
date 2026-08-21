console.log('動いた！');

const title = document.querySelector('#site-title');
if (title ) {
title.textContent = 'ぴぃや';
}

const btn = document.querySelector('.submit-btn');
const message = document.querySelector('#form-message');
if (btn && message) {
btn.addEventListener('click', () => {
message.textContent = 'リアクションありがとうございます！';
});

let count: number = 0; 

const likeBtn = document.querySelector('#like-btn');
const likeCount = document.querySelector('#like-count');
if (likeBtn && likeCount) { 
likeBtn.addEventListener('click', () => {
    count++;
    likeCount.textContent =String(count);

    if (count === 10) {
        likeCount.textContent = '10いいね達成！ありがとうございます！';
    }
});

 
interface Item { title: string; category: string; description: string; }

const items: Item[] = [
 { title: '的場華鈴', category: 'リーダー', description: 'オリジナルメンバー' },
 { title: '鈴木彩艶', category: '選手', description: 'パルマ所属！' },
];

items[0].description 

