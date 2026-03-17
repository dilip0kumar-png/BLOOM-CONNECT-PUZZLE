// Admin Login

const ADMIN_USER = "dilip";
const ADMIN_PASS = "1234";

function adminLogin(){

 let user = document.getElementById("username").value;
 let pass = document.getElementById("password").value;

 if(user === ADMIN_USER && pass === ADMIN_PASS){

   localStorage.setItem("admin_login","true");
   location.reload();

 }else{

   alert("Wrong username or password");

 }

}

// logout

function logout(){

 localStorage.removeItem("admin_login");
 location.reload();

}


// app start

window.onload = function(){

 loadDB();

 console.log("ExamNova Loaded");

}