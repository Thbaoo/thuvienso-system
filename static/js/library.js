const libraryContainer = document.getElementById("libraryContainer");
let books = JSON.parse(localStorage.getItem("libraryBooks")) || [];

function renderLibrary() {
  libraryContainer.innerHTML = "";

  if (books.length === 0) {
    libraryContainer.innerHTML = "<p>Bạn chưa yêu thích quyển sách nào 😢</p>";
    return;
  }

  books.forEach((book) => {
    const div = document.createElement("div");
    div.classList.add("book-item");
    div.innerHTML = `
      <img src="${book.image}" alt="${book.title}" style="width:100px;">
      <h4>${book.title}</h4>
      <p><strong>Năm xuất bản:</strong> ${book.year}</p>
      <div class="buttons">
        <button class="info-btn" data-id="${book.id}">ℹ️ Thông tin</button>
        <button class="delete-btn" data-id="${book.id}">🗑️ Xoá</button>
      </div>
    `;
    libraryContainer.appendChild(div);
  });
}

renderLibrary();

// 🎯 Lắng nghe sự kiện
libraryContainer.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  // 👉 Xử lý nút xoá
  if (e.target.classList.contains("delete-btn")) {
    books = books.filter(book => book.id !== id);
    localStorage.setItem("libraryBooks", JSON.stringify(books));

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter(item => item !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    renderLibrary();
  }

  // 📖 Xử lý nút thông tin
// 📖 Xử lý nút thông tin
  if (e.target.classList.contains("info-btn")) {
    const book = books.find(b => b.id === id); 
    if (book && book.link) {
      window.location.href = `${book.link}`; 
    } else {
      alert("Không tìm thấy thông tin chi tiết của sách này!");
    }
  }
});
