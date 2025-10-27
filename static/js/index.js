// Lấy tất cả nút yêu thích
const favButtons = document.querySelectorAll('.favorite-btn');

// Lấy danh sách đã lưu trong localStorage
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Khi load trang, tô đỏ lại trái tim nào đã lưu
favButtons.forEach(btn => {
  const id = btn.dataset.bookId;
  const icon = btn.querySelector('i');

  // Nếu id có trong danh sách favorites => tô đỏ trái tim
  if (favorites.includes(id)) {
    icon.classList.replace('fa-regular', 'fa-solid');
    icon.classList.add('active');
    icon.style.color = 'red';
  } else {
    icon.classList.replace('fa-solid', 'fa-regular');
    icon.style.color = 'gray';
  }

  // Lắng nghe sự kiện click
  btn.addEventListener('click', () => {
    if (favorites.includes(id)) {
      // Nếu đã có → xóa khỏi danh sách
      favorites = favorites.filter(item => item !== id);
      icon.classList.replace('fa-solid', 'fa-regular');
      icon.classList.remove('active');
      icon.style.color = 'gray';
    } else {
      // Nếu chưa có → thêm vào danh sách
      favorites.push(id);
      icon.classList.replace('fa-regular', 'fa-solid');
      icon.classList.add('active');
      icon.style.color = 'red';
    }

    // Lưu danh sách cập nhật vào localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
  });
});
