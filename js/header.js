let head = `        <div class="header-container">
            <img class="header-logo" src="img/home/logo.svg">
            <div class="header-nav">
                <a href=""><img src="img/home/nav-ico-1.svg" alt=""></a>
                <a href=""><img src="img/home/nav-ico-2.svg" alt=""></a>
                <a href=""><img src="img/home/nav-ico-3.svg" alt=""></a>
            </div>
            <div class="header-right">
                <div class="header-search">
                    <img src="img/home/search-ico.svg" alt="" >
                    <input type="text" placeholder="Tìm kiếm">
                </div>
                <button class="header-login">ĐĂNG NHẬP</button>
            </div>
            <div class="nav-mobile">
                <div class="nav-mobile-search" id="search-mobile" >
                    <input type="text" placeholder="Quick search">
                    <div class="nav-mobile-search-img" id="btn-search-mobile"><img src="img/home/nav-ico-search.svg" alt=""></div>
                </div>
                <div class="nav-mobile-list" id="btn-list-mobile">
                    <img src="img/home/nav-ico-list.svg" alt="">
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



const btnList = document.getElementById("btn-list-mobile");
const btnListClose = document.getElementById("list-mobile-close");
const displayListNav = document.getElementById("list-mobile-nav");
const displayList = document.getElementById("list-mobile");
btnList.addEventListener("click", () =>{
    displayList.classList.add("active");
    displayListNav.classList.add("active");
});
displayList.addEventListener("click", (e) => {
    if (e.target === displayList || e.target == btnListClose) {
        displayList.classList.remove("active");
        displayListNav.classList.remove("active");
    }
});