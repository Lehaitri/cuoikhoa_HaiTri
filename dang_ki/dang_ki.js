function register(){

const email =
document.getElementById("email").value.trim();

const countryCode =
document.getElementById("countryCode").value;

let phone =
document.getElementById("phone").value.trim();


if(!email || !phone){

alert("Vui lòng nhập đầy đủ thông tin");
return;

}


// kiểm tra email

const emailRegex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRegex.test(email)){

alert("Email không hợp lệ");
return;

}


// lấy số

phone = phone.replace(/\D/g,'');

if(phone.length<6 || phone.length>15){

alert("Số điện thoại không hợp lệ");
return;

}

const user={

email:email,
phone:countryCode + " " + phone

};

localStorage.setItem(
"user",
JSON.stringify(user)
);


alert("Đăng ký thành công");

window.location.href="../dang_nhap/dang_nhap.html";
}