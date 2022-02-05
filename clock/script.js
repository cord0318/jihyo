var date = new Date();
const language = {"대한민국":"ko-KR", "미국":"en-US", "영국":"en-GB", "아라비아":"ar-EG", "중국":"zh"};
var default_language = language["미국"];

// var timeFormat = new Intl.DateTimeFormat(default_language, { dateStyle: "short", timeStyle: 'long'}).format(date);
// console.log(timeFormat);
// var date = new Date(timeFormat);
// console.log(date);

function getTime() {
    setInterval(function() {
        var time = new Date();
        if (date.getSeconds() != time.getSeconds()) {
            var hour = time.getHours();
            var pam = "AM";
            if (hour >= 12) pam = "PM";
            if (hour > 12) hour -= 12;
            var change = [fill(hour), fill(time.getMinutes()), fill(time.getSeconds())];
            document.getElementsByClassName("clock")[0].innerHTML = "<span class=\"time\">" + change.join("</span><span>:</span><span class=\"time\">");
            document.getElementsByClassName("day")[0].innerHTML = pam;
        }
        date = time;
    }, 10, true);
}

function fill(thing) {
    return ("0".repeat(2 - thing.toString().length) + thing.toString()).split("").join("</span><span class=\"time\">");
}

window.addEventListener("load", getTime, true);