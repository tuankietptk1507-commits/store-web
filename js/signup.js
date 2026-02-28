function handleRegister() {
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;

    if (!email || !password) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Email không đúng định dạng!");
        return;
    }

    register(email, password);
}

