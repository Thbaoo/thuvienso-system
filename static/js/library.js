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
      <button class="delete-btn" data-id="${book.id}">🗑️ Xoá</button>
    `;
    libraryContainer.appendChild(div);
  });
}

renderLibrary();
// 🎯 Lắng nghe sự kiện xoá
libraryContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const id = e.target.dataset.id;

    // Xoá khỏi danh sách libraryBooks
    books = books.filter(book => book.id !== id);
    localStorage.setItem("libraryBooks", JSON.stringify(books));

    // 🔄 Đồng bộ luôn với danh sách favorites của index
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter(item => item !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    // Cập nhật lại giao diện
    renderLibrary();
  }
});
