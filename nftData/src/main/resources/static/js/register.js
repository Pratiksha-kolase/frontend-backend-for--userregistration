var nameError = document.getElementById("name-error");
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var userError = document.getElementById('user-error');
var passwordError = document.getElementById("pass-error");
var repasswordError = document.getElementById("repass-error");

function validation() {
  var fullname = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var repassword = document.getElementById("repassword").value;

  if (fullname.length == 0) {
    nameError.innerHTML = "Please Enter Name";
    return false;
  }
  if (!fullname.match(/^[a-z]+\s[a-z ]+$/i)) {
    nameError.innerHTML = "Please Enter Valid Full Name";
    return false;
  } else {
    nameError.innerHTML = " ";
  }

  if (email.length == 0) {
    emailError.innerHTML = "Please Enter Email";
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    emailError.innerHTML = "Enter Valid Email";
    return false;
  } else {
    emailError.innerHTML = "";
  }

  if (phone.length == 0) {
    phoneError.innerHTML = "Enter Contact Number";
    return false;
  }
  if (isNaN(phone)) {
    phoneError.innerHTML = "Enter Valid Contact ";
    return false;
  }
  else {
    phoneError.innerHTML = "";
  }

  if (phone.length > 10) {
    phoneError.innerHTML = "Enter Valid Contact";
    return false;
  } else {
    phoneError.innerHTML = "";
  }

  if (username.length == 0) {
    userError.innerHTML = "Enter Username";
    return false;
  }
  if (!username.match( /^[a-zA-Z0-9]+$/)) {
    userError.innerHTML = "Enter only Alphabets and Numbers";
    return false;
  }
  else {
    userError.innerHTML = "";
  }

  if (password==null) {
    password.innerHTML = "Enter Password";
    return false;
  }
  else {
    password.innerHTML = "";
  }

  if (repassword.length == 0) {
    repasswordError.innerHTML = "Enter Confirm Password";
    return false;
  } else {
    repasswordError.innerHTML = "";
  }

  if (!repassword.match(password)) {
    repasswordError.innerHTML = "Password Not Match";
    return false;
  } else {
    repasswordError.innerHTML = "";
  }

}

