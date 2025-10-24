
**<meta name="viewport" content="width=device-width, initial-scale=1.0">**
thẻ <meta> này điều khiển cách trang web hiển thị trên thiết bị di động (và cả máy tính bảng).

**name="viewport"**
→ Cho trình duyệt biết đây là cấu hình dành cho vùng hiển thị (viewport).

**content="width=device-width"**
→ Nghĩa là: chiều rộng của trang web = chiều rộng của thiết bị.
(Ví dụ: màn hình điện thoại rộng 390px → trang web cũng hiển thị với khung 390px, không bị thu nhỏ lại như khi xem web máy tính.)

**initial-scale=1.0**
→ Thiết lập tỉ lệ phóng to ban đầu là 1:1 (100%).
Nghĩa là khi người dùng vừa mở trang, không bị zoom vào hoặc thu nhỏ.

-----> Hiển thị đúng kích thước, dễ đọc và thân thiện trên mọi thiết bị di động.
----------------------------------------------------------------------------------
<header class="navbar"> ... </header>
header thẻ HTML5 dùng cho phần đầu của trang hoặc một phần nội dung thường chứa logo, tên web, thanh menu. ( mình nằm trong trường hợp 2 )

class="navbar": gán class để định dạng phần này bằng CSS. (Trong style.css chắc mày có code .navbar { ... } để tạo thanh điều hướng đẹp hơn).

Phần logo 
**<div> là viết tắt của "division" — nghĩa là một khối (block) để chứa nội dung hoặc nhóm các phần tử lại với nhau.**
ví dụ gom nhóm nội dung 
<div class="profile">
  <h2>Bao</h2>
  <p>Sinh viên Đại học Văn Lang</p>
</div>
-----------------------------
<div class="logo">: nhóm lại phần logo (hình + chữ).

<img src="...">: hiển thị ảnh logo của trang, nằm trong thư mục static/images/thuvienso-logo.png.

alt="logo": mô tả ảnh (dành cho trình đọc màn hình hoặc khi ảnh bị lỗi không hiển thị).
----------
<div class="text">: phần chữ bên cạnh logo.

<span class="small">thuvien</span> và <span class="big">sachso</span>: chia chữ thành 2 phần — có thể CSS sẽ cho phần “sachso” to hơn hoặc đậm hơn để tạo điểm nhấn.
--><span> là một thẻ inline (nội dòng), dùng để gom nhóm hoặc định dạng một phần nhỏ trong dòng văn bản.
--------------------
<nav>: phần điều hướng (navigation). Thường chứa danh sách link giúp người dùng di chuyển giữa các trang.

<a href="#">...</a>: từng link menu. Dấu # chỉ là tạm thời — sau này mày sẽ thay bằng đường dẫn thật.

<i>🔍</i>: icon minh họa (ở đây dùng emoji, hoặc có thể thay bằng icon font như Font Awesome sau này).

Dấu ▾ trong “Học liệu số ▾” thường gợi ý có menu con (dropdown).

==> Hiển thị ra sẽ giống một thanh navbar hiện đại:
Logo nằm bên trái, còn menu (Tìm kiếm, Học liệu số, Thư viện cá nhân, Giới thiệu) nằm bên phải.