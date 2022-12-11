
//日期選擇器
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

// 年度佛七第一期起七日
const yearBuddha7Start = document.querySelector("#theFirstBuddhaSevenStart");
const yearBuddha7StartPicker = new Pikaday({
  field: yearBuddha7Start,
  minDate: new Date("2010-01-01"),
  maxDate: new Date("2030-12-31"),
  yearRange: [2010, 2030],
  i18n: {
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
  },
  onSelect: function () {
    let date = document.createTextNode(this.getMoment().format("LL"));
    datepicker.appendChild(date);
  },
});

// 年度佛七第一期圓滿日
const yearBuddha7End = document.querySelector("#theFirstBuddhaSevenEnd");
const yearBuddha7EndPicker = new Pikaday({
  field: yearBuddha7End,
  minDate: new Date("2010-01-01"),
  maxDate: new Date("2030-12-31"),
  yearRange: [2010, 2030],
  i18n: {
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
  },
  onSelect: function () {
    let date = document.createTextNode(this.getMoment().format("LL"));
    datepicker.appendChild(date);
  },
});

// 單筆佛七起七日
const buddha7Start = document.querySelector("#buddha7Start");
const buddha7StartPicker = new Pikaday({
  field: buddha7Start,
  minDate: new Date("2010-01-01"),
  maxDate: new Date("2030-12-31"),
  yearRange: [2010, 2030],
  i18n: {
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
  },
  onSelect: function () {
    let date = document.createTextNode(this.getMoment().format("LL"));
    datepicker.appendChild(date);
  },
});

// 單筆佛七起七日
const buddha7End = document.querySelector("#buddha7End");
const buddha7EndPicker = new Pikaday({
  field: buddha7End,
  minDate: new Date("2010-01-01"),
  maxDate: new Date("2030-12-31"),
  yearRange: [2010, 2030],
  i18n: {
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
  },
  onSelect: function () {
    let date = document.createTextNode(this.getMoment().format("LL"));
    datepicker.appendChild(date);
  },
});

// 取得年度佛七
function getBuddha7(year) {
  axios.get(`${basicURL}BuddhaSevens?year=${year}`).then(function (response) {
    let buddha7 = response.data;
    renderBuddha7(buddha7);
  });
}

// 本年度佛七

// 未圓滿
const thisYearBuddha7 = document.querySelector("#thisYearBuddha7");
console.log(thisYearBuddha7);

// 已圓滿
const finished = document.querySelector("#finished");
console.log(finished);

// 渲染佛七
function renderBuddha7(buddha7) {
  let thisYearBuddha7Html = "";
  let finishedHtml = "";
  buddha7.forEach((item) => {
    let content = `
      <tr>
        <th scope="row">${item.num}</th>
        <td>${item.start}</td>
        <td>${item.end}</td>
        <td>${item.notes}</td>
        <td class="d-flex justify-content-evenly">
          <button type="button" class="btn btn-outline-secondary" data-id="${item.id}">
            修改
          </button>
          <button type="button" class="btn btn-outline-danger" data-id="${item.id}">
            移除
          </button>
        </td>
      </tr>
      `
    if(moment().format() < moment(item.end).format()){
      thisYearBuddha7Html += content;
    }else if (moment().format() >= moment(item.end).format()){
      finishedHtml += content;
    }
  });

  thisYearBuddha7.innerHTML = thisYearBuddha7Html;
  finished.innerHTML = finishedHtml;
}

// 新增單期佛七期數
function addBuddha7(buddha7Obj) {
  axios.post(`${basicURL}BuddhaSevens`, buddha7Obj).then(function (response) {
    console.log(`新增第 ${buddha7Obj.num} 期成功`);
  });
}


// 新增整年度佛七測試
function testB7() {

  tidiedArr.forEach(item =>{
    addBuddha7(item);
  })
}


// 初始化
function init() {
  getBuddha7(2022);
  renderSidebarActive("佛七期數設定","menu-system","menu-system-setting");
}
init();
