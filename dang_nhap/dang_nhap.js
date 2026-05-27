function login(){

let email =document.getElementById("username").value.trim();

let phone =document.getElementById("password").value.trim();

phone = phone.replace(/\D/g,'');


const user=
JSON.parse(
localStorage.getItem("user")
);


if(!user){

alert("Chưa có tài khoản");
return;

}


if(

email===user.email &&
phone===user.phone

){

alert("Đăng nhập thành công");

window.location.href=
"../trang_chu/trang_chu.html";

}
else{

alert("Sai Email hoặc số điện thoại");

}

}