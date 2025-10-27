// ====== index.js ======

// Lấy tất cả nút yêu thích
const favButtons = document.querySelectorAll('.favorite-btn');

// Lấy danh sách ID yêu thích và thư viện từ localStorage
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let libraryBooks = JSON.parse(localStorage.getItem('libraryBooks')) || [];

// Tải dữ liệu sách từ file JSON (chỉ cần fetch 1 lần)
let bookData = [];
fetch('static/data/books.json') // đổi lại path nếu file khác
  .then(res => res.json())
  .then(data => {
    bookData = data;
    initFavorites();
  })
  .catch(err => console.error("Lỗi load dữ liệu sách:", err));

function initFavorites() {
  favButtons.forEach(btn => {
    const id = btn.dataset.bookId;
    const icon = btn.querySelector('i');

    // Nếu id có trong favorites => tô đỏ
    if (favorites.includes(id)) {
      icon.classList.replace('fa-regular', 'fa-solid');
      icon.classList.add('active');
      icon.style.color = 'red';
    } else {
      icon.classList.replace('fa-solid', 'fa-regular');
      icon.style.color = 'gray';
    }

    btn.addEventListener('click', () => {
      if (favorites.includes(id)) {
        // Nếu đã có → xóa khỏi danh sách
        favorites = favorites.filter(item => item !== id);
        libraryBooks = libraryBooks.filter(b => b.id !== id);

        icon.classList.replace('fa-solid', 'fa-regular');
        icon.classList.remove('active');
        icon.style.color = 'gray';
      } else {
        // Nếu chưa có → thêm vào danh sách
        favorites.push(id);

        // Tìm thông tin chi tiết từ dữ liệu JSON
        const book = bookData.find(b => b.id === id);
        if (book) {
          const newBook = {
            id: book.id,
            title: book.title,
            author: book.author || "Không rõ tác giả",
            year: book.year || "",
            image: book.img || "",
            description: book.description || ""
          };
          libraryBooks.push(newBook);
        }

        icon.classList.replace('fa-regular', 'fa-solid');
        icon.classList.add('active');
        icon.style.color = 'red';
      }

      // Cập nhật localStorage
      localStorage.setItem('favorites', JSON.stringify(favorites));
      localStorage.setItem('libraryBooks', JSON.stringify(libraryBooks));
    });
  });
}
