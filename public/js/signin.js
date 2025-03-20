const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const signupBtn = document.querySelector("label.signup");
const loginBtn = document.querySelector("label.login");

signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  signupForm.style.marginLeft = "0%";
});

loginBtn.onclick = (() => {
  signupForm.style.marginLeft = "50%";
  loginForm.style.marginLeft = "0%";
});
