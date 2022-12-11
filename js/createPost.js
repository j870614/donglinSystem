//公告日期
let releaseDate = "";
const postDate = document.querySelector("#datepicker");
const picker = new Pikaday({
  field: postDate,
  minDate: new Date("2010-01-01"),
  maxDate: new Date("2030-12-31"),
  yearRange: [2010, 2030],
  i18n: i18n,
});
postDate.addEventListener("change", (e) => {
  releaseDate = e.target.value;
});

//公告類別
let type = "";
const postOptions = document.querySelectorAll("[name=postOptions]");
postOptions.forEach((postType) => {
  postType.addEventListener("change", () => {
    let checked = document.querySelector("[name=postOptions]:checked");
    type = checked.value;
    renderPostKind(type);
  });
});

// 公告性質
let kind = "";
const postKind = document.querySelector(".form-select");
postKind.addEventListener("change", (e) => {
  kind = e.target.value;
});

function renderPostKind(type) {
  let renderHtml;
  switch (type) {
    case "常住公告":
      renderHtml = `
      <option selected>請選擇公告性質</option>
      <option value="執事異動">執事異動</option>
      <option value="寺務公告">寺務公告</option>
      <option value="會議記錄">會議記錄</option>
      `;
      break;
    case "系統公告":
      renderHtml = `
        <option selected>請選擇公告性質</option>
        <option value="系統維護">系統維護</option>
        <option value="系統更新內容">系統更新內容</option>
        `;
      break;
  }
  postKind.innerHTML = renderHtml;
}

//公告內容
let content = "";
const postContent = document.querySelector("#post-Content");
postContent.addEventListener("change", (e) => {
  content = e.target.value;
});

// 發布公告 btn 監聽
const sendBtn = document.querySelector("#sendPost");
sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let postObj = {};
  postObj.releaseDate = releaseDate;
  postObj.type = type;
  postObj.kind = kind;
  postObj.content = content;
  addPost(postObj);
  
});

//新增公告
function addPost(postObj) {
  axios.post(`${basicURL}posts`, postObj)
  .then(function (response) {
    alert("新增公告成功");
  });
}

// 初始化
function init() {
  renderSidebarActive("新增公告","menu-system","menu-system-post");
}

init();

