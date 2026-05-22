const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.close');

// 渲染图片墙
imagesData.forEach((item) => {
  const div = document.createElement('div');
  div.classList.add('grid-item');
  div.innerHTML = `<img src="${item.src}" alt="${item.name}"><p>${item.name}</p>`;
  div.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = item.src;
    lightboxCaption.textContent = item.desc;
  });
  gallery.appendChild(div);
});

// 弹窗关闭
closeBtn.onclick = () => { lightbox.style.display = 'none'; }
window.onclick = (e) => { if(e.target == lightbox) lightbox.style.display = 'none'; }