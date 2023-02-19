const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const firstForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
//登录和注册的切换
signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});


//验证
function check1(){
    var password=document.getElementById('password1').value;
    if (password=="") {
      alert("密码不能为空");
      return false;
    }
    if (password.length<6) {
      alert("密码必须等于或大于6个字符");
      return false;
    }
  }
  function check2(){
    var password=document.getElementById('password2').value;
    if (password=="") {
      alert("密码不能为空");
      return false;
    }
    if (password.length<6) {
      alert("密码必须等于或大于6个字符");
      return false;
    }
  }