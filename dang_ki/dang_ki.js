function register() {
    const email = document.getElementById('email').value.trim();
    const countryCode = document.getElementById('countryCode').value.trim();
    let phone = document.getElementById('phone').value.trim();

    if (!email || !phone) {
        alert('Vui lòng nhập đầy đủ thông tin');
        return;
    }

    // simple email regex
    const emailRe = /^\S+@\S+\.\S+$/;
    if (!emailRe.test(email)) {
        alert('Email không hợp lệ');
        return;
    }

    // normalize phone: remove non-digit characters
    phone = phone.replace(/\D/g, '');

    const phoneRe = /^[0-9]{6,15}$/;
    if (!phoneRe.test(phone)) {
        alert('Số điện thoại chỉ gồm chữ số (6-15 chữ số)');
        return;
    }

    const user = {
        id: Date.now(),
        email: email,
        phone: countryCode + ' ' + phone,
        createdAt: new Date().toISOString()
    };

    // keep an array of users so multiple registrations are preserved
    const existing = JSON.parse(localStorage.getItem('users') || '[]');
    existing.push(user);
    localStorage.setItem('users', JSON.stringify(existing));

    // store a shortcut to the last registered user
    localStorage.setItem('lastUser', JSON.stringify(user));

    alert('Đăng ký thành công');
    window.location.href = 'dang_nhap.html';
}