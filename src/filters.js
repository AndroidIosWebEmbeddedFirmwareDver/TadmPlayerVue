import Vue from "vue";

Vue.filter("roundW", function(valueIn = 0) {
    const value = valueIn ? valueIn : 0;
    if (value < 1000) {
        return value
    } else if (value > 1000 && value < 10000) {
        return Math.round(value / 1000) + ' K+'
    } else if (value > 10000 && value < 1000000) {
        return Math.round(value / 10000) + ' W+'
    } else if (value > 1000000 && value < 10000000) {
        return Math.round(value / 1000000) + ' 百W+'
    } else if (value > 10000000 && value < 100000000) {
        return Math.round(value / 10000000) + ' 千W+'
    } else {
        return Math.round(value / 100000000) + ' 亿+'
    }
});
Vue.filter("timeFormat", (timeIn = 0) => {
    const time = timeIn ? new Date(timeIn * 1000) : 0;
    if (time) {
        let minute = time.getMinutes();
        let second = time.getSeconds();
        second = second.toString().padStart(2, "0")
        return `${minute} : ${second}`;
    } else {
        return "0 : 00";
    }
})
Vue.filter("dateFormat", (dateIn = 0) => {
    const date = dateIn ? new Date(dateIn) : 0;
    if (date) {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        month = month.toString().padStart(2, "0");
        day = day.toString().padStart(2, "0");

        return `${year}-${month}-${day}`;
    } else {
        return "Private";
    }
})