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

const SUPABASE_URL = "https://siepepsplpiureehxjwt.supabase.co";
const SUPABASE_KEY = "sb_publishable_hZcGvOqL62xKFp4JJ9pFsg_cbs1chtY";

async function loadItems() {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/items?select=*`, {
    headers: {
      apikey: SUPABASE_KEY
    }
  });
  const data = await res.json();
   renderItems(data);
}

loadItems();

function renderItems(items) {
  const list = document.getElementById("item-list");
  list.innerHTML = "";

  for (const item of items) {
    const card = document.createElement("div");
    card.className = "item-card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p class="category">${item.category}</p>
      <p>${item.description ?? ""}</p>
    `;
    list.appendChild(card);
  }

async function addItem(title, category, description) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/items`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      "Content-Type": "application/json",
      Prefer: "return=representation"
    },
    body: JSON.stringify({ title, category, description })
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message ?? `エラー（${res.status}）`);
  }

  const data = await res.json();
  console.log(res.status, data);

  document.getElementById("add-btn").addEventListener("click", async () => {
  const msg = document.getElementById("form-message");
  const btn = document.getElementById("add-btn");

  const title = document.getElementById("input-title").value;
  const category = document.getElementById("input-category").value;
  const description = document.getElementById("input-description").value;

  btn.disabled = true;
  msg.textContent = "追加中...";

  try {
    await addItem(title, category, description);

    document.getElementById("input-title").value = "";
    document.getElementById("input-category").value = "";
    document.getElementById("input-description").value = "";

    await loadItems();
    msg.textContent = "追加しました！";
  } catch (e) {
    msg.textContent = "失敗しました：" + e.message;
  } finally {
    btn.disabled = false;
  }
});
}