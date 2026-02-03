const search = document.getElementById("search-mobile")
const btnSearch = document.getElementById("btn-search-mobile")
btnSearch.addEventListener("click", () => {
    search.classList.toggle("nav-mobile-search-active")
})