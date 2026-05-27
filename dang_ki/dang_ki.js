function register(){

const email =
document.getElementById("email").value.trim();

const countryCode =
document.getElementById("countryCode").value;

let phone =
document.getElementById("phone").value.trim();


// kiểm tra rỗng

if(!email || !phone){

alert("Vui lòng nhập đầy đủ thông tin");
return;

}

const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRegex.test(email)){

alert("Email không hợp lệ");
return;

}

// bỏ ký tự lạ

phone = phone.replace(/\D/g,'');

const phoneRegex =
/^[0-9]{6,15}$/;

if(!phoneRegex.test(phone)){

alert("Số điện thoại không hợp lệ");
return;

}

const user={

email:email,
phone:phone,
countryCode:countryCode

};

// localStorage

localStorage.setItem(
"user",
JSON.stringify(user)
);

alert("Đăng ký thành công");

window.location.href=
"../dang_nhap/dang_nhap.html";

}