const user = JSON.parse(localStorage.getItem("user"));

let authHTML = `
<a href="./login.html">
    <button class="header-login">ĐĂNG NHẬP</button>
</a>
`;

if (user) {
    authHTML = `
        <div class="header-user">
            <img src="${user.avatar}" class="header-avatar" title="${user.email}">
        </div>
    `;
}

let head = `
<div class="header-container">
    <img class="header-logo" src="img/home/logo.svg">

    <div class="header-nav">
        <a href="index.html"><img src="img/home/nav-ico-1.svg"></a>
        <a href="#"><img src="img/home/nav-ico-2.svg"></a>
        <a href="#"><img src="img/home/nav-ico-3.svg"></a>
    </div>

    <div class="header-right">
        <div class="header-search">
            <img src="img/home/search-ico.svg">
            <input type="text" placeholder="Tìm kiếm">
        </div>

        ${authHTML}
    </div>

    <div class="nav-mobile">
        <div class="nav-mobile-search" id="search-mobile">
            <input type="text" placeholder="Quick search">
            <div class="nav-mobile-search-img" id="btn-search-mobile">
                <img src="img/home/nav-ico-search.svg">
            </div>
        </div>
        <div class="nav-mobile-list">
            <img src="img/home/nav-ico-list.svg">
        </div>
    </div>
</div>
`;
document.getElementsByTagName("header")[0].innerHTML = head;

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("header-avatar")) {
        localStorage.removeItem("user");
        window.location.reload();
    }
});