let head = `        <div class="header-container">
            <img class="header-logo" src="img/home/logo.svg">
            <div class="header-nav">
                <a href="index.html"><img src="img/home/nav-ico-1.svg" alt=""></a>
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
                <div class="nav-mobile-list">
                    <img src="img/home/nav-ico-list.svg" alt="">
                </div>
            </div>
        </div>`
document.getElementsByTagName("header")[0].innerHTML = head;