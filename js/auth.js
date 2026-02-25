function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function register(email, password) {
    const users = getUsers();

    const userExists = users.find(user => user.email === email);
    if (userExists) {
        alert("Email đã tồn tại!");
        return false;
    }

    users.push({ email, password });
    saveUsers(users);

    alert("Đăng ký thành công!");
    window.location.href = "login.html";
}
function login(email, password) {

    if (email && password) {

        const user = {
            email: email,
            avatar: `https://ui-avatars.com/api/?name=${email}&background=1570EF&color=fff`
        };
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "index.html";
    } else {
        alert("Sai thông tin đăng nhập!");
    }
}