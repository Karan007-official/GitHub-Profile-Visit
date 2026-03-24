# 🚀 GitHub Profile Viewer

A simple and responsive web application that allows users to search for any GitHub profile and view key details instantly.

---

## 📌 Features

* 🔍 Search any GitHub username
* 👤 View profile picture, name, and bio
* 📊 See followers, following, and public repositories
* 🔗 Direct link to GitHub profile
* ⏳ Loading animation while fetching data
* ❌ Handles invalid usernames gracefully

---

## 🛠️ Tech Stack

* HTML
* CSS
* JavaScript (Vanilla JS)
* GitHub REST API

---

## 📸 Preview

<!-- Add screenshot here -->
<img width="1919" height="1013" alt="image" src="https://github.com/user-attachments/assets/7f169b80-1ccb-4bda-9953-9bf91d198785" />

![Preview](./screenshot.png)

---

## ⚙️ How It Works

1. Enter a GitHub username in the input field
2. Click the **Search** button
3. The app fetches data from:

   ```
   https://api.github.com/users/{username}
   ```
4. Displays user details dynamically

---

## 📂 Project Structure

```
📁 GitHub-Profile-Viewer
│── index.html
│── index.css
│── index.js
│── README.md
```

---

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/github-profile-viewer.git
   ```

2. Open the project folder:

   ```bash
   cd github-profile-viewer
   ```

3. Run the project:

   * Open `index.html` in your browser

---

## ⚠️ Known Issues

* Some users may not have a bio
* API rate limit may apply for too many requests

---

## 💡 Future Improvements

* 🌙 Dark mode
* 📱 Better mobile responsiveness
* 📦 Show user repositories
* ⭐ Favorite profiles feature
* ⌨️ Search on Enter key

---

## 📜 License

This project is open-source and free to use.

---

## 👨‍💻 Author

**Your Name**

* GitHub: https://github.com/karan007-official

---

⭐ If you like this project, give it a star!
