

// 取得公告
function getPosts() {
  axios.get(`${basicURL}posts?_sort=releaseDate&_order=asc`).then(function (response) {
    let postData = response.data;
    renderPost(postData);
  });
}

// 渲染公告
const posts = document.querySelector("#posts");
function renderPost(data) {
  let templePostData = [];
  let systemPostData = [];
  data.forEach((item) => {
    if (item.type === "常住公告") {
      templePostData.push(item);
    } else if (item.type === "系統公告") {
      systemPostData.push(item);
    }
  });

  // 常住公告
  let templePostHtml = `<h3 class="fw-bolder mt-5">常住公告：</h3>`;
  templePostData.forEach((item) => {
    // 公告時間格式整理
    let releaseDate = moment(item.releaseDate).format("LL");
    // 公告內容換行處理
    let content = item.content.replace(/\n/g, "<br/>");
    let str = `
    <div class="card my-3 px-4">
    <div class="card-body">
      <h4
        class="card-title text-center fw-bolder my-3 d-flex justify-content-center align-items-center"
      >
        <img
          src="./img/1.Logo1.png"
          alt=""
          width="40"
          height="60"
          class="me-3"
        />
        彌陀之家東林寺公告
      </h4>
      <span class="badge bg-primary-tint text-primary px-3 py-2 my-2 fs-5">${item.kind}</span>
      <p class="card-text fs-5">${content}</p>
      <a href="#" class="btn btn-outline-primary">
        <span class="material-icons-outlined align-middle"
          >find_in_page</span
        >
        <span class="align-middle">查看公告影本圖檔</span>
      </a>
      <p class="card-text text-center fs-5 fw-bolder p-3">
        ${releaseDate}
      </p>
    </div>
    </div> `;
    templePostHtml += str;
  });

  // 系統公告
  let systemPostHtml = `<h3 class="fw-bolder mt-5">系統公告：</h3>`;
  systemPostData.forEach((item) => {
    // 公告時間格式整理
    let releaseDate = moment(item.releaseDate).format("LL");
    // 公告內容換行處理
    let content = item.content.replace(/\n/g, "<br/>");
    let str = `<div class="card my-3 px-4">
    <div class="card-body">
      <h4 class="card-title text-center fw-bolder my-3 pb-3 d-flex justify-content-center align-items-center">
        <img
          src="./img/1.Logo1.png"
          alt=""
          width="40"
          height="60"
          class="me-3"
        />
        系統公告
      </h4>
      <span class="badge bg-secondary-tint text-secondary px-3 py-2 my-2 fs-5">${item.kind}</span>
      <p class="card-text fs-5">
      ${content}
      </p>
      <p class="card-text text-center fs-5 fw-bolder p-3">
        ${releaseDate}
      </p>
    </div>
  </div>`;
    systemPostHtml += str;
  });

  let postHtml = templePostHtml + systemPostHtml;

  posts.innerHTML = postHtml;
}

// 初始化
function init() {
  getPosts();
  renderSidebarActive("歷史公告查詢","menu-system","menu-system-post");
}

init();


