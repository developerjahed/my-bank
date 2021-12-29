// =============== Login system Start here  =================
const loginBtn=document.getElementById('login-btn');
const userEmail=document.getElementById('user-email');
const userPassword=document.getElementById('user-password');

loginBtn.addEventListener('click', function(){
  if(userEmail.value=="developerjahed@gmail.com" && userPassword.value=="webdeveloper"){
    alert('Thank you');
      window.location.href='banking.html';
  }
});


