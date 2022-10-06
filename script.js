$(document).ready(function(){
    
    let timeEl = $("<p>");
    let dayEl = $("<p>")

    let time1 = $("#div1");
    let time2 = $("#div2");
    let time3 = $("#div3");
    let time4 = $("#div4");
    let time5 = $("#div5");
    let time6 = $("#div6");

    time1.val(localStorage.getItem("event1"));
    time2.val(localStorage.getItem("event2"));
    time3.val(localStorage.getItem("event3"));
    time4.val(localStorage.getItem("event4"));
    time5.val(localStorage.getItem("event5"));
    time6.val(localStorage.getItem("event6"));

    let save1 = $("#button1");
    let save2 = $("#button2");
    let save3 = $("#button3");
    let save4 = $("#button4");
    let save5 = $("#button5");
    let save6 = $("#button6");



    save1.on("click", function(){
        event.preventDefault();
        if (time1.val() !== ""){
            localStorage.setItem("event1",time1.val());
        }
    });
    save2.on("click", function(){
        event.preventDefault();
        if (time2.val() !== ""){
            localStorage.setItem("event2",time2.val());
        }
    });
    save3.on("click", function(){
        event.preventDefault();
        if (time3.val() !== ""){
            localStorage.setItem("event3",time3.val());
        }
    });
    save4.on("click", function(){
        event.preventDefault();
        if (time4.val() !== ""){
            localStorage.setItem("event4",time4.val());
        }
    });
    save5.on("click", function(){
        event.preventDefault();
        if (time5.val() !== ""){
            localStorage.setItem("event5",time5.val());
        }
    });
    save6.on("click", function(){
        event.preventDefault();
        if (time6.val() !== ""){
            localStorage.setItem("event6",time6.val());
        }
    });

    function tick() {
        dayEl.text(moment().format("MM/DD/YYYY"));
        timeEl.text(moment().format("hh:mm:ssA"));
        $('.jumbotron').append(dayEl);
        $('.jumbotron').append(timeEl);
    }

    tick();
    setInterval(tick, 1000);
    setInterval(checkTime, 600000);

    var timeNow = parseInt(moment().format("HH"));

    function checkTime() {
        if (parseInt(time1.attr("hour"))>timeNow){
            time1.removeclass("past present future");
            time1.addClass("future");
        }
        else if (parseInt(time1.attr("hour"))===timeNow){
        time1.removeClass("past present future");
        time1.addClass("present");
        }
        else {
            time1.removeClass("past present future");
            time1.addClass("past");
        }

        if (parseInt(time2.attr("hour"))>timeNow){
            time2.removeclass("past present future");
            time2.addClass("future");
        }
        else if (parseInt(time2.attr("hour"))===timeNow){
        time2.removeClass("past present future");
        time2.addClass("present");
        }
        else {
            time2.removeClass("past present future");
            time2.addClass("past");
        }

        if (parseInt(time3.attr("hour"))>timeNow){
            time3.removeclass("past present future");
            time3.addClass("future");
        }
        else if (parseInt(time3.attr("hour"))===timeNow){
        time3.removeClass("past present future");
        time3.addClass("present");
        }
        else {
            time3.removeClass("past present future");
            time3.addClass("past");
        }

        if (parseInt(time4.attr("hour"))>timeNow){
            time4.removeclass("past present future");
            time4.addClass("future");
        }
        else if (parseInt(time4.attr("hour"))===timeNow){
        time4.removeClass("past present future");
        time4.addClass("present");
        }
        else {
            time4.removeClass("past present future");
            time4.addClass("past");
        }

        if (parseInt(time5.attr("hour"))>timeNow){
            time51.removeclass("past present future");
            time5.addClass("future");
        }
        else if (parseInt(time5.attr("hour"))===timeNow){
        time5.removeClass("past present future");
        time5.addClass("present");
        }
        else {
            time5.removeClass("past present future");
            time5.addClass("past");
        }

        if (parseInt(time6.attr("hour"))>timeNow){
            time6.removeclass("past present future");
            time6.addClass("future");
        }
        else if (parseInt(time6.attr("hour"))===timeNow){
        time6.removeClass("past present future");
        time6.addClass("present");
        }
        else {
            time6.removeClass("past present future");
            time6.addClass("past");
        }
    }
})
