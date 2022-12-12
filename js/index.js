// API 設定
const basicURL = `http://localhost:3000/`;
// 登入表單
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", e=>{
    
    let loginInfo = {
        email: email.value,
        password: password.value
    };

    sendLogin(loginInfo);
    email.value = "";
    password.value = "";
})

// 登入
function login(result){
    const token = result.accessToken;
    const id = result.user.id;
    localStorage.setItem("token",token);
    localStorage.setItem("id",id);
    location.href = "./share-Pages/homePage.html";
}

// 登入 API 介接
function sendLogin(loginInfo) {
    let result = "";
    axios.post(`${basicURL}login`, loginInfo)
    .then(function (response) {
        result = response.data;
        login(result);
    })
    .catch(function (error) {
        result = error.response.data;
        if(result === "Cannot find user"){
            alert("查無帳號，請查看是否輸入錯誤，或是註冊一個新帳號");
        }else if(result === "Incorrect password"){
            alert("密碼輸入錯誤，請重新輸入密碼");
        }
      });
  }