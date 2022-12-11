// 取得公告
function getPosts() {
  axios.get(`${basicURL}posts?_sort=releaseDate&_order=desc&_limit=6`).then(function (response) {
    let postData = response.data;
    renderPost(postData);
  });
}
// 渲染公告
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

  renderTemplePost(templePostData);
  renderSystemPost(systemPostData);
}

// 常住公告
const templePost = document.querySelector("#templePost");
function renderTemplePost(templePostData) {
  let templePostHtml = `
    <li class="list-group-item border-0">
        <div class="d-flex justify-content-between align-items-center text-nowrap">
        <h3 class="fs-4 m-0 fw-bolder">彌陀之家東林寺公告</h5>
            <a href="/templeSystem/pages/search-post.html" class="card-text fw-bolder d-flex align-items-center link-dark fs-6">
            顯示更多
            <span class="material-icons-outlined">arrow_forward</span>
            </a>
        </div>
    </li>
    `;

  templePostData.forEach((item) => {
    // 公告時間格式整理
    let releaseDate = moment(item.releaseDate).format("MMM Do");
    // 公告內容換行處理
    let content = item.content.replace(/\n/g, "<br/>");
    let str = `
                <li class="list-group-item border-bottom">
                    <div class="card-body px-0 d-flex justify-content-between">
                    <div class="pe-2">
                        <span class="badge bg-primary-tint text-primary px-3 py-2 fs-6">${item.kind}</span>
                        <span class="badge bg-neutral-40 text-neutral-80 px-3 py-2 fs-6"></span>
                        <p class="mt-2 m-0">${content}</p>
                    </div>
                    <span class="badge bg-neutral-40 text-neutral-80 align-self-center fs-7 p-2 ">${releaseDate}</span>
                    </div>
                </li>
            `;
    templePostHtml += str;
  });
  templePost.innerHTML = templePostHtml;
}

// 系統公告
const systemPost = document.querySelector("#systemPost");
function renderSystemPost(systemPostData) {
  let systemPostHtml = `
  <li class="list-group-item border-0">
    <div class="d-flex justify-content-between align-items-center text-nowrap">
        <h3 class="fs-4 m-0 fw-bolder">系統公告</h5>
        <a href="/templeSystem/pages/search-post.html" class="card-text fw-bolder d-flex align-items-center link-dark fs-6">
            顯示更多
            <span class="material-icons-outlined">arrow_forward</span>
        </a>
    </div>
  </li>
    `;

  systemPostData.forEach((item) => {
    // 公告時間格式整理
    let releaseDate = moment(item.releaseDate).format("MMM Do");
    // 公告內容換行處理
    let content = item.content.replace(/\n/g, "<br/>");
    let str = `
                <li class="list-group-item border-bottom">
                    <div class="card-body px-0 d-flex justify-content-between">
                    <div class="pe-2">
                        <span class="badge bg-secondary-tint text-secondary px-3 py-2 fs-6">${item.kind}</span>
                        <span class="badge bg-neutral-40 text-neutral-80 px-3 py-2 fs-6"></span>
                        <p class="mt-2 m-0">${content}</p>
                    </div>
                    <span class="badge bg-neutral-40 text-neutral-80 align-self-center fs-7 p-2 ">${releaseDate}</span>
                    </div>
                </li>
            `;
    systemPostHtml += str;
  });
  systemPost.innerHTML = systemPostHtml;
}

// 初始化
function init() {
  getPosts();
}
init();