// 註冊表單
const confirmPassword = document.querySelector("#confirmPassword");
const signUpBtn = document.querySelector("#signUpBtn");
signUpBtn.addEventListener("click", e =>{
    console.log(password.value);
    console.log(confirmPassword.value);
    if(password.value !== confirmPassword.value){
        alert("密碼確認輸入不符合，請確認是否輸入錯誤");
        confirmPassword.value = "";
        return;
    }else{
        let signUpInfo ={
            email: email.value,
            password: password.value
        };
        localStorage.setItem("signUpInfo",JSON.stringify(signUpInfo));
        location.href = "info.html"
    }
})
