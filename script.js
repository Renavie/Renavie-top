// script.js

// DOMが読み込まれた後に実行
document.addEventListener("DOMContentLoaded", function () {

  // ロゴをクリックしたらページをリロード
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", () => {
      location.reload();
    });
  }

  // 今後追加する機能はここに追記していく👇
  // 例：スクロール時にナビの色変更など
});
