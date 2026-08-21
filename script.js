"use strict";
console.log('動いた！');
const title = document.querySelector('#site-title');
if (title) {
    title.textContent = 'ぴぃや';
}
const btn = document.querySelector('.submit-btn');
const message = document.querySelector('#form-message');
if (btn && message) {
    btn.addEventListener('click', () => {
        message.textContent = 'リアクションありがとうございます！';
    });
    let count = 0;
    const likeBtn = document.querySelector('#like-btn');
    const likeCount = document.querySelector('#like-count');
    if (likeBtn && likeCount) {
        likeBtn.addEventListener('click', () => {
            count++;
            likeCount.textContent = String(count);
            if (count === 10) {
                likeCount.textContent = '10いいね達成！ありがとうございます！';
            }
        });
        const items = [
            { title: '的場華鈴', category: 'リーダー', description: 'オリジナルメンバー' },
            { title: '鈴木彩艶', category: '選手', description: 'パルマ所属！' },
        ];
        
    }
   const renderItems = (itemList: Item[]): void => {
  const container = document.querySelector('#item-list');
  if (!container) return;
  container.innerHTML = '';
  itemList.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <h3 class="item-title">${item.title}</h3>
      <p class="item-description">${item.description}</p>
    `;
    container.appendChild(card);
  });
};

renderItems(items);