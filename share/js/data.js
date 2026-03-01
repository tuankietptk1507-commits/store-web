// Kiểm tra dữ liệu
console.log("Trang Tất cả ứng dụng đã nhận data: ", appsData);

const allAppsContainer = document.getElementById('all-apps-container');

if (allAppsContainer) {
    let html = '';
    
    // Duyệt qua TOÀN BỘ mảng appsData
    appsData.forEach(app => {
        html += `
            <div class="section-list-item">
                <div class="section-list-item-img">
                    <img src="${app.img}" alt="${app.title}">
                </div>
                <div class="section-list-item-content">
                    <div class="section-list-item-content-left">
                        <p class="section-list-item-content-left-tittle">${app.title}</p>
                        <p class="section-list-item-content-left-text">${app.author} | v${app.version}</p>
                    </div>
                    <div class="section-list-item-content-right">
                        <a href="../detail/detail.html?id=${app.id}" class="section-list-item-content-right-btn">Tải xuống</a>
                    </div>
                </div>
            </div>
        `;
    });
    
    // Đổ vào giao diện
    allAppsContainer.innerHTML = html;
}