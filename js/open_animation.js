// script.js
document.addEventListener("DOMContentLoaded", function() {
    // 等待DOM加載完成後執行以下代碼

    // 獲取開頭動畫區塊和動畫元素的引用
    const introAnimation = document.getElementById("intro-animation");
    const introVideo = document.getElementById("intro-video");

    // 添加滑鼠點擊事件
    document.addEventListener("click", function() {
        // 暫停動畫
        introVideo.pause();

        // 跳轉到指定的URL，例如 "main.html"
        window.location.href = "../main.html";
    });
});
