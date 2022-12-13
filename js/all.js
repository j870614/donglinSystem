// API 設定
const basicURL = `https://json-server-jraf.onrender.com`;
const token = localStorage.getItem("token");

// 側邊選單收合
const toggleMenuBtn = document.querySelector(".toggle-btn");
const body = document.querySelector("body");
toggleMenuBtn.addEventListener("click", (e) => {
  e.preventDefault(0);
  body.classList.toggle("sidebar-toggled");
});

// 渲染側邊選單
const sidebar = document.querySelector("#sidebar");
function renderSidebar(){
  let sidebarHtml =`
  <aside
  class="sidebar vh-100 d-flex bg-white flex-column overflow-auto collapse sticky-top"
>
  <!-- 首頁 -->
  <a href="../share-Pages/homePage.html" class="sidebar-link">
    <div class="d-flex align-items-center fs-5">
      <span class="material-icons-outlined me-2">home</span>
      首頁
    </div>
  </a>

  <div class="aside-body">
    
  </div>
  <!-- 系統管理 -->
  <a
    data-bs-toggle="collapse"
    class="sidebar-link "
    href="#menu-system"
    role="button"
  >
    <div class="d-flex justify-content-between fs-5">
      <p class="mb-0 d-flex align-items-center">
        <span class="material-icons-outlined me-2">build</span>
        系統管理
      </p>
      <span class="material-icons-outlined"> keyboard_arrow_down </span>
    </div>
  </a>

  <!-- 系統管理子選單 -->
  <div class="collapse show ps-3" id="menu-system">
    
    <!-- 使用者權限 -->
    <div class="sidebar-link ">
      <a
        data-bs-toggle="collapse"
        class="link-dark "
        href="#menu-authority"
        role="button"
      >
        <div class="d-flex justify-content-between fs-5">
          <p class="mb-0 d-flex align-items-center">
            <span class="material-icons-outlined me-2">vpn_key</span>
            使用者權限
          </p>
          <span class="material-icons-outlined">
            keyboard_arrow_down
          </span>
        </div>
      </a>
    </div>

    <!-- 使用者權限選單 -->
    <div class="collapse ps-4" id="menu-authority">
      <div class="sidebar-link border-start border-neutral-40 border-4 rounded-0 rounded-end fs-5" data-sidebar="使用者權限管理">
        <a
          class="link-dark"
          href="../admin/auth-mgmt.html"
          role="button"
        >
        <p class="m-0">使用者權限管理</p>
        </a>
      </div>
      <div class="sidebar-link border-start border-neutral-40 border-4 rounded-0 rounded-end fs-5" data-sidebar="使用者權限核發">
        <a
          class="link-dark"
          href="../admin/auth-issuance.html"
          role="button"
        >
        <p class="m-0">使用者權限核發</p>
        </a>
      </div>
    </div>

    <!-- 系統設定 -->
    <div class="sidebar-link">
      <a
        data-bs-toggle="collapse"
        class="link-dark"
        href="#menu-system-setting"
        role="button"
      >
        <div class="d-flex justify-content-between fs-5">
          <p class="mb-0 d-flex align-items-center">
            <span class="material-icons-outlined me-2">settings</span>
            系統設定
          </p>
          <span class="material-icons-outlined">
            keyboard_arrow_down
          </span>
        </div>
      </a>
    </div>

    <!-- 系統設定選單 -->
    <div class="collapse ps-4" id="menu-system-setting">
      <div class="sidebar-link border-start border-neutral-40 border-4 rounded-0 rounded-end fs-5 "data-sidebar="佛七期數設定">
        <a
          class="link-dark"
          href="../admin/buddha-seven.html"
          role="button"
        >
        <p class="m-0">佛七期數設定</p>
        </a>
      </div>
      <div class="sidebar-link border-start border-neutral-40 border-4 rounded-0 rounded-end fs-5" data-sidebar="行事曆">
        <a
          data-bs-toggle="collapse"
          class="link-dark"
          href="#"
          role="button"
        >
        <p class="m-0">行事曆</p>
        </a>
      </div>
    </div>

    <!-- 系統公告 -->
    <div class="sidebar-link">
      <a
        data-bs-toggle="collapse"
        class="link-dark"
        href="#menu-system-post"
        role="button"
      >
        <div class="d-flex justify-content-between fs-5">
          <p class="mb-0 d-flex align-items-center">
            <span class="material-icons-outlined me-2"
              >notifications</span
            >
            系統公告
          </p>
          <span class="material-icons-outlined">
            keyboard_arrow_down
          </span>
        </div>
      </a>
    </div>

    <!-- 系統公告選單 -->
    <div class="collapse ps-4" id="menu-system-post">
      <div class="sidebar-link border-start border-neutral-40 border-4 rounded-0 rounded-end fs-5 "data-sidebar="新增公告">
        <a
          class="link-dark"
          href="../admin/create-post.html"
          role="button"
        >
        <p class="m-0">新增公告</p>
        </a>
      </div>
      <div class="sidebar-link border-start border-neutral-40 border-4 rounded-0 rounded-end fs-5" data-sidebar="歷史公告查詢">
        <a
          class="link-dark"
          href="../share-Pages/search-post.html"
          role="button"
        >
        <p class="m-0">歷史公告查詢</p>
        </a>
      </div>
    </div>

  </div>

  <!-- 知客 -->
  <a
    data-bs-toggle="collapse"
    class="sidebar-link"
    href="#menu-service"
    role="button"
  >
    <div class="d-flex justify-content-between fs-5">
      <p class="mb-0 d-flex align-items-center">
        <span class="material-icons-outlined me-2">group</span>
        知客
      </p>
      <span class="material-icons-outlined"> keyboard_arrow_down </span>
    </div>
  </a>

  <!-- 知客子選單 -->
  <div class="collapse ps-3" id="menu-service">
    
    <!-- 佛七報名預約 -->
    <div class="sidebar-link ">
      <a
        data-bs-toggle="collapse"
        class="link-dark "
        href="#menu-buddha7"
        role="button"
      >
        <div class="d-flex justify-content-between fs-5">
          <p class="mb-0 d-flex align-items-center">
            <span class="material-icons-outlined me-2">note_alt</span>
            佛七報名預約
          </p>
          <span class="material-icons-outlined">
            keyboard_arrow_down
          </span>
        </div>
      </a>
    </div>

    <!-- 佛七報名預約選單 -->
    <div class="collapse ps-4" id="menu-buddha7">
      <div class="sidebar-link border-start border-neutral-40 border-4 rounded-0 rounded-end fs-5 " data-sidebar="佛七報名預約名單">
        <a
          class="link-dark"
          href="#"
          role="button"
        >
        <p class="m-0">佛七報名預約名單</p>
        </a>
      </div>
      <div class="sidebar-link border-start border-neutral-40 border-4 rounded-0 rounded-end fs-5" data-sidebar="報名佛七">
        <a
          class="link-dark"
          href="#"
          role="button"
        >
        <p class="m-0">報名佛七</p>
        </a>
      </div>
      <div class="sidebar-link border-start border-neutral-40 border-4 rounded-0 rounded-end fs-5" data-sidebar="佛七報到">
        <a
          class="link-dark"
          href="#"
          role="button"
        >
        <p class="m-0">佛七報到</p>
        </a>
      </div>
    </div>

    <!-- 皈依報名 -->
    <div class="sidebar-link">
      <a
        data-bs-toggle="collapse"
        class="link-dark"
        href="#menu-refuge"
        role="button"
      >
        <div class="d-flex justify-content-between fs-5">
          <p class="mb-0 d-flex align-items-center">
            <span class="material-icons-outlined me-2">person_add_alt</span>
            皈依報名
          </p>
          <span class="material-icons-outlined">
            keyboard_arrow_down
          </span>
        </div>
      </a>
    </div>

    <!-- 皈依報名選單 -->
    <div class="collapse ps-4" id="menu-refuge">
      <div class="sidebar-link border-start border-neutral-40 border-4 rounded-0 rounded-end fs-5 " data-sidebar="皈依報名名單">
        <a
          class="link-dark"
          href="../receptionist/applied-refuge-list.html"
          role="button"
        >
        <p class="m-0">皈依報名名單</p>
        </a>
      </div>
      <div class="sidebar-link border-start border-neutral-40 border-4 rounded-0 rounded-end fs-5" data-sidebar="報名皈依">
        <a
          data-bs-toggle="collapse"
          class="link-dark"
          href="#"
          role="button"
        >
        <p class="m-0">報名皈依</p>
        </a>
      </div>
      <div class="sidebar-link border-start border-neutral-40 border-4 rounded-0 rounded-end fs-5" data-sidebar="皈依資料建檔">
        <a
          data-bs-toggle="collapse"
          class="link-dark"
          href="#"
          role="button"
        >
        <p class="m-0">皈依資料建檔</p>
        </a>
      </div>
    </div>

    <!-- 參訪及活動 -->
    <div class="sidebar-link">
      <a
        data-bs-toggle="collapse"
        class="link-dark"
        href="#menu-activity"
        role="button"
      >
        <div class="d-flex justify-content-between fs-5">
          <p class="mb-0 d-flex align-items-center">
            <span class="material-icons-outlined me-2"
              >event</span
            >
            參訪及活動
          </p>
          <span class="material-icons-outlined">
            keyboard_arrow_down
          </span>
        </div>
      </a>
    </div>

    <!-- 參訪及活動選單 -->
    <div class="collapse ps-4" id="menu-activity">
      <div class="sidebar-link border-start border-neutral-40 border-4 rounded-0 rounded-end fs-5 " data-sidebar="來寺參訪預約">
        <a
          class="link-dark"
          href="#"
          role="button"
        >
        <p class="m-0">來寺參訪預約</p>
        </a>
      </div>
      <div class="sidebar-link border-start border-neutral-40 border-4 rounded-0 rounded-end fs-5" data-sidebar="參與活動人數登記">
        <a
          class="link-dark"
          href="#"
          role="button"
        >
        <p class="m-0">參與活動人數登記</p>
        </a>
      </div>
    </div>

  </div>

  <!-- 寮房 -->
  <a
    data-bs-toggle="collapse"
    class="sidebar-link"
    href="#"
    role="button"
  >
    <div class="d-flex justify-content-between fs-5">
      <p class="mb-0 d-flex align-items-center">
        <span class="material-icons-outlined me-2">bed</span>
        寮房
      </p>
      <span class="material-icons-outlined"> keyboard_arrow_down </span>
    </div>
  </a>

  <!-- 四眾個人資料 -->
  <a
    data-bs-toggle="collapse"
    class="sidebar-link"
    href="#"
    role="button"
  >
    <div class="d-flex justify-content-between fs-5">
      <p class="mb-0 d-flex align-items-center">
        <span class="material-icons-outlined me-2">description</span>
        四眾個人資料
      </p>
      <span class="material-icons-outlined"> keyboard_arrow_down </span>
    </div>
  </a>

  <!-- 查詢用齋人數 -->
  <a
    data-bs-toggle="collapse"
    class="sidebar-link"
    href="#"
    role="button"
  >
    <div class="d-flex justify-content-between fs-5">
      <p class="mb-0 d-flex align-items-center">
        <span class="material-icons-outlined me-2">local_dining</span>
        查詢用齋人數
      </p>
      <span class="material-icons-outlined"> keyboard_arrow_down </span>
    </div>
  </a>

  <!-- 登出按鈕 -->
  <a  class="sidebar-link mt-auto" data-js="logoutBtn" >
    <div class="d-flex align-items-center fs-5" data-js="logoutBtn">
      <span class="material-icons-outlined me-2">logout</span>
      登出
    </div>
  </a>
</aside>
  `;
  sidebar.innerHTML = sidebarHtml;
}

// 側邊選單選定狀態
function renderSidebarActive(menuName ,mainMenuId ,submenuId){
  const mainMenuDom = document.querySelector(`#${mainMenuId}`)
  const submenuDom = document.querySelector(`#${submenuId}`);
  const menuNameDom = document.querySelector(`[data-sidebar="${menuName}"]`);
  mainMenuDom.setAttribute("class", "collapse show ps-4");
  submenuDom.setAttribute("class", "collapse show ps-4");
  menuNameDom.setAttribute("class", "sidebar-link border-start border-neutral-40 border-4 rounded-0 rounded-end fs-5 active");
}

// 渲染上方導覽列
const navbar = document.querySelector(".navbar");
function renderNavbar(){
  let navbarHtml = `
  <div class="container-fluid">
        <div class="d-flex align-items-center">
          <button
            class="navbar-toggler my-0 d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand d-flex align-items-center mx-2" href="../share-Pages/homePage.html">
            <img
              src="../img/1.Logo1.png"
              alt=""
              width="49"
              height="80"
              class="d-none d-lg-inline-block align-text-top me-3"
            />
            <img
              src="../img/3.tittle.png"
              alt=""
              width="228"
              height="39"
              class="d-none d-lg-inline-block align-text-top"
            />
            <h1
              class="h2 fw-bolder d-none d-lg-inline-block align-text-top ms-5"
            >
              寺務管理系統
            </h1>
          </a>
        </div>

        <div class="d-flex align-items-center">
          <a href="#" class="link-dark">
            <span
              class="material-icons-outlined border rounded-circle p-2 mx-2 mx-lg-3"
            >
              notifications
            </span>
          </a>

          <div class="dropdown me-lg-3">
            <a
              class="btn dropdown-toggle d-flex px-0 align-items-center material-icons-outlined"
              href="#"
              role="button"
              id="accountMemu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span
                class="material-icons-outlined border rounded-circle p-2 text-primary me-lg-3"
                >account_circle</span
              >
              <span class="h5 m-0 fw-bolder d-none d-lg-inline-block"
                >系統管理員</span
              >
            </a>

            <ul
              class="dropdown-menu dropdown-menu-end nav-accounts"
            >
              <li>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <span class="material-icons-outlined me-1"
                    >manage_accounts</span
                  >
                  <span class="fs-5">帳號設定</span>
                </a>
              </li>
              <li >
                <a class="dropdown-item d-flex align-items-center" href="#" data-js="logoutBtn">
                  <span class="material-icons-outlined me-1" data-js="logoutBtn">logout</span>
                  <span class="fs-5" data-js="logoutBtn">登出</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  `;
  navbar.innerHTML = navbarHtml;
}

// picker 日期選擇器套件設定
moment.locale("zh-tw", {
  months:
    "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
      "_"
    ),
  monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
  weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
  weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
  weekdaysMin: "日_一_二_三_四_五_六".split("_"),
  longDateFormat: {
    LT: "Ah點mm分",
    LTS: "Ah點m分s秒",
    L: "YYYY-MM-DD",
    LL: "YYYY年MMMD日",
    LLL: "YYYY年MMMD日Ah點mm分",
    LLLL: "YYYY年MMMD日ddddAh點mm分",
    l: "YYYY-MM-DD",
    ll: "YYYY年MMMD日",
    lll: "YYYY年MMMD日Ah點mm分",
    llll: "YYYY年MMMD日ddddAh點mm分",
  },
  meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
  meridiemHour: function (h, meridiem) {
    let hour = h;
    if (hour === 12) {
      hour = 0;
    }
    if (meridiem === "凌晨" || meridiem === "早上" || meridiem === "上午") {
      return hour;
    } else if (meridiem === "下午" || meridiem === "晚上") {
      return hour + 12;
    } else {
      // '中午'
      return hour >= 11 ? hour : hour + 12;
    }
  },
  meridiem: function (hour, minute, isLower) {
    const hm = hour * 100 + minute;
    if (hm < 600) {
      return "凌晨";
    } else if (hm < 900) {
      return "早上";
    } else if (hm < 1130) {
      return "上午";
    } else if (hm < 1230) {
      return "中午";
    } else if (hm < 1800) {
      return "下午";
    } else {
      return "晚上";
    }
  },
  calendar: {
    sameDay: function () {
      return this.minutes() === 0 ? "[今天]Ah[點整]" : "[今天]LT";
    },
    nextDay: function () {
      return this.minutes() === 0 ? "[明天]Ah[點整]" : "[明天]LT";
    },
    lastDay: function () {
      return this.minutes() === 0 ? "[昨天]Ah[點整]" : "[昨天]LT";
    },
    nextWeek: function () {
      let startOfWeek, prefix;
      startOfWeek = moment().startOf("week");
      prefix = this.diff(startOfWeek, "days") >= 7 ? "[下]" : "[本]";
      return this.minutes() === 0 ? prefix + "dddA點整" : prefix + "dddAh點mm";
    },
    lastWeek: function () {
      let startOfWeek, prefix;
      startOfWeek = moment().startOf("week");
      prefix = this.unix() < startOfWeek.unix() ? "[上]" : "[本]";
      return this.minutes() === 0 ? prefix + "dddAh點整" : prefix + "dddAh點mm";
    },
    sameElse: "LL",
  },
  ordinalParse: /\d{1,2}(日|月|周)/,
  ordinal: function (number, period) {
    switch (period) {
      case "d":
      case "D":
      case "DDD":
        return number + "日";
      case "M":
        return number + "月";
      case "w":
      case "W":
        return number + "周";
      default:
        return number;
    }
  },
  relativeTime: {
    future: "%s内",
    past: "%s前",
    s: "幾秒",
    m: "1 分鐘",
    mm: "%d 分鐘",
    h: "1 小時",
    hh: "%d 小時",
    d: "1 天",
    dd: "%d 天",
    M: "1 個月",
    MM: "%d 个月",
    y: "1 年",
    yy: "%d 年",
  },
  week: {
    // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
    dow: 1, // Monday is the first day of the week.
    doy: 4, // The week that contains Jan 4th is the first week of the year.
  },
});
const i18n = {
  previousMonth: "上個月",
      nextMonth: "下個月",
      months: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ],
      weekdays: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
      weekdaysShort: ["日", "一", "二", "三", "四", "五", "六"],
}

// 登入狀態驗證
function isLogin(){
  if( !token ){
    alert("尚未登入，請登入！");
    location.href = "../index.html";
  }
}

// 登出
console.log(sidebar);
sidebar.addEventListener("click",e=>{
  if(e.target.dataset.js === "logoutBtn"){
    logout();
  }
})
navbar.addEventListener("click", e=>{
  if(e.target.dataset.js === "logoutBtn"){
    logout();
  }
})

function logout(){
  alert("已經登出，將跳轉至登入頁")
  localStorage.setItem("token","");
  localStorage.setItem("id", "");
  location.href = "../index.html";
}

// 初始化
function allInit(){
  
  renderSidebar();
  renderNavbar();
  isLogin();
}
allInit();
