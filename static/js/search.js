  const input = document.getElementById("searchInput");
  const resultsContainer = document.getElementById("resultsContainer");
  let books = [];

  // Tải dữ liệu từ file JSON
  fetch("static/data/books.json")
    .then(res => res.json())
    .then(data => {
      books = data;
    });

  // Lắng nghe sự kiện nhập
  input.addEventListener("input", () => {
    const keyword = input.value.toLowerCase();
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(keyword)
    );

    resultsContainer.innerHTML = filtered.length
      ? filtered.map(b => `
          <div class="book-card">
            <img src="${b.img}" alt="${b.title}">
            <h3>${b.title}</h3>
            <p>Năm xuất bản: ${b.year}</p>
          </div>
        `).join("")
      : "<p>Không tìm thấy sách nào phù hợp.</p>";
  });