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
};

// 個人資料
let buddhistObj = {};
// 法師資料
let masterObj = {};

// 性別
const genderOptions = document.querySelectorAll("[name=gender]");
genderOptions.forEach((gender) => {
  gender.addEventListener("change", () => {
    let checked = document.querySelector("[name=gender]:checked");
    buddhistObj.gender = checked.value;
  });
});

// 通訊方式表單
const directoryForm = document.querySelector("#directoryForm");

// 通訊資料
directoryForm.addEventListener("change", (e) => {
  buddhistObj[e.target.id] = e.target.value;
});

// 身份別
const identityOptions = document.querySelectorAll("[name=identity]");
const identityForm = document.querySelector("#identityForm");
identityOptions.forEach((identity) => {
  identity.addEventListener("change", () => {
    let checked = document.querySelector("[name=identity]:checked");
    let identity = checked.value;
    buddhistObj.identity = identity;
    renderIdentityForm(identity);
  });
});

// 個人資料表單渲染
function renderIdentityForm(identity) {
    const maxDate = moment().format("YYYY-MM-DD");
    const minDate = moment().subtract(100, "years").format("YYYY-MM-DD");
    let masterFormHtml = `
    <div class="col-md-4">
        <label for="dharmaName" class="form-label">外號</label>
        <input
        type="text"
        class="form-control"
        id="dharmaName"
        placeholder="請輸入外號"
        />
   </div>

    <div class="col-md-4">
        <label for="alias" class="form-label">內號</label>
        <input
        type="text"
        class="form-control"
        id="alias"
        placeholder="請輸入內號"
        data-js="master"
        />
    </div>

    <div class="col-md-4">
        <label for="name" class="form-label">俗名</label>
        <input
        type="text"
        class="form-control"
        id="name"
        placeholder="請輸入姓名"
        />
    </div>

    <div class="col-md-4">
        <label for="birthday" class="form-label">出生年月日</label>
        <input
        type="date"
        class="form-control"
        id="birthday"
        min="${minDate}" 
        max="${maxDate}"
        placeholder="請輸入出生年月日"
        />
    </div>

    <div class="row g-3">
        <div class="col-md-4">
        <label for="placeOfOrdination" class="form-label">受戒道場</label>
        <input
            type="text"
            class="form-control"
            id="placeOfOrdination"
            placeholder="請輸入受戒道場"
            data-js="master"
        />
        </div>

        <div class="col-md-4">
        <label for="DateOfOrdination" class="form-label">受具足戒日期</label>
        <input
            type="date"
            class="form-control"
            id="DateOfOrdination"
            min="${minDate}" 
            max="${maxDate}"
            placeholder="請輸入受戒日期"
            data-js="master"
        />
        </div>

        <div class="col-md-4">
        <label for="numOfAltar" class="form-label">壇別</label>
        <input
            type="number"
            class="form-control"
            id="numOfAltar"
            placeholder="請輸入壇別"
            data-js="master"
        />
        </div>
    </div>
    <div class="col-6">
        <label for="masterOfTonsure" class="form-label">剃度師長徳號</label>
        <input
        type="text"
        class="form-control"
        id="masterOfTonsure"
        placeholder="請輸入剃度師長徳號"
        data-js="master"
        />
    </div>
    <div class="col-6">
        <label for="livingTemple" class="form-label">寶剎</label>
        <input
        type="text"
        class="form-control"
        id="livingTemple"
        placeholder="請輸入常住道場名稱"
        data-js="master"
        />
    </div>
    `;
    let buddhistFormHtml = `
    <div class="col-md-4">
        <label for="dharmaName" class="form-label">法名</label>
        <input
        type="text"
        class="form-control"
        id="dharmaName"
        placeholder="尚未皈依者無需輸入"
        value=""
        />
   </div>

    <div class="col-md-4">
        <label for="name" class="form-label">俗名</label>
        <input
        type="text"
        class="form-control"
        id="name"
        placeholder="請輸入姓名"
        />
    </div>

    <div class="col-md-4">
        <label for="birthday" class="form-label">出生年月日</label>
        <input
        type="date"
        class="form-control"
        id="birthday"
        min="${minDate}" 
        max="${maxDate}"
        placeholder="請輸入出生年月日"
        />
    </div>
    `;
  identity === "法師"
    ? (identityForm.innerHTML = masterFormHtml)
    : (identityForm.innerHTML = buddhistFormHtml);
}

  
// 個人資料
identityForm.addEventListener("change", (e) => {
  if (e.target.dataset.js === "master") {
    masterObj[e.target.id] = e.target.value;
  } else {
    buddhistObj[e.target.id] = e.target.value;
  }
  
});

// 下一步按鈕監聽
const nextStep = document.querySelector("#nextStep");
nextStep.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(buddhistObj);
  if(Object.keys(buddhistObj).length === 0){
    alert("資料輸入不完整");
  }else{
    localStorage.setItem("buddhistObj", JSON.stringify(buddhistObj));
    localStorage.setItem("masterObj", JSON.stringify(masterObj));
  }
});

