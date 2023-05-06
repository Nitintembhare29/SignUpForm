if(localStorage.getItem("userinfo") == null){
    alert(`you are not signed in. Please sign up to see the profile details`);
    window.location.href  = "./index.html";
}

let fullname = document.querySelector("#fname");
let email = document.querySelector("#email");
let password = document.querySelector("#pass");
let logoutbtn  = document.querySelector("#log-out");

if(localStorage.getItem("userinfo")){
    let user = JSON.parse(localStorage.getItem("userinfo"));
   fullname.innerText = "Full Name: " +  user.fullname;
   email.innerText = "Email: " + user.email;
   password.innerText = "Password: " + user.password;

   logoutbtn.style.display = "inline-block";

}



logoutbtn.addEventListener("click", ()=>{

   localStorage.removeItem("userinfo");
    window.location.href  = "./index.html";

});