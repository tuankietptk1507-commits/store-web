const user = JSON.parse(localStorage.getItem("user"));

let authHTML = `
<a href="../../pages/login/login.html">
    <button class="header-login">ĐĂNG NHẬP</button>
</a>
`;

if (user) {
    authHTML = `
        <div class="header-user">
            <img src="${user.avatar}" class="header-avatar" title="${user.email}">
            <div class="user-dropdown" id="userDropdown">
                <a href="#" class="dropdown-item"><img src="../../img/home/user-line (2).svg" alt="">Tài khoản</a>
                <a href="../upload/upload.html" class="dropdown-item"><img src="../../img/home/upload-2-line.svg" alt="">Đăng bài</a>
                <div class="dropdown-item logout"><img src="../../img/home/logout-box-line.svg" alt="">Đăng xuất</div>
            </div>
        </div>
    `;
}

let head = `
<div class="header-container">
    <img class="header-logo" src="../../img/home/logo.svg">

    <div class="header-nav">
        <a href="../home/index.html"><img src="../../img/home/nav-ico-1.svg"></a>
        <a href="#"><img src="../../img/home/nav-ico-2.svg"></a>
        <a href="#"><img src="../../img/home/nav-ico-3.svg"></a>
    </div>

    <div class="header-right">
        <div class="header-search">
            <img src="../../img/home/search-ico.svg">
            <input type="text" placeholder="Tìm kiếm">
        </div>

        ${authHTML}
    </div>

    <div class="nav-mobile">
        <div class="nav-mobile-search" id="search-mobile">
            <input type="text" placeholder="Quick search">
            <div class="nav-mobile-search-img" id="btn-search-mobile">
                <img src="../../img/home/nav-ico-search.svg">
            </div>
            <div class="nav-mobile">
                <div class="nav-mobile-search" id="search-mobile" >
                    <input type="text" placeholder="Quick search">
                    <div class="nav-mobile-search-img" id="btn-search-mobile"><img src="../../img/home/nav-ico-search.svg" alt=""></div>
                </div>
                <div class="nav-mobile-list" id="btn-list-mobile">
                    <img src="../../img/home/nav-ico-list.svg" alt="">
                </div>
            </div>
        </div>
        <div class="list-mobile" id="list-mobile">
            <div class="list-mobile-container" id="list-mobile-nav">
                <div class="list-mobile-container-close" id="list-mobile-close"></div>
                <a href="" class="list-mobile-text">Trang chủ</a>
                <a href="" class="list-mobile-text">Khám phá</a>
                <a href="" class="list-mobile-text">Trò chơi</a>
                <a href="" class="list-mobile-text">Đăng nhập</a>
            </div>
        </div>`
document.getElementsByTagName("header")[0].innerHTML = head;

document.addEventListener("click", function(e) {
    const avatar = document.querySelector(".header-avatar");
    const dropdown = document.getElementById("userDropdown");
    if (!avatar) return;
    if (avatar.contains(e.target)) {
        dropdown.classList.toggle("show");
    }
    else if (e.target.classList.contains("logout")) {
        localStorage.removeItem("user");
        window.location.reload();
    }
    else {
        if (dropdown) dropdown.classList.remove("show");
    }
});