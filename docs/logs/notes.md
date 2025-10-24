ý tưởng: https://thuviensachso.edu.vn/

library_system/
│
├── app.py                    # File chính Flask
├── config.py                 # Cấu hình DB, đường dẫn
│
├── templates/                # HTML giao diện
│   ├── index.html
│   ├── books.html
│   ├── readers.html
│   └── borrow.html
│
├── static/                   # CSS, JS, hình ảnh
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── app.js
│   ├── images/
│   │   └── books/
│   └── uploads/
│       └── pdfs/
│
├── database/
│   └── library.db            # SQLite database
│
├── models/                   # Các model xử lý DB
│   ├── book_model.py
│   ├── reader_model.py
│   └── borrow_model.py
│
├── scripts/                  # Script chạy trên Linux
│   ├── backup.sh             # Backup dữ liệu
│   └── monitor.sh            # Giám sát hệ thống
│
└── requirements.txt          # Thư viện Python cần cài

