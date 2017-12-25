var counter = 0;
var minute = 5;
var countdown;
$("#time").text(minute + ":" + counter);

$("#start").click(function(){
    countdown = setInterval(function(){
        counter--;
        if(counter > 0 && minute >= 0){
            $("#time").text(minute + ":" + counter);
        }
        else{
            counter = 60;
            minute--;
        }
    }, 1000);

    $(this).prop("disabled", true);
});

$("#pause").click(function(){
    clearInterval(countdown);
    $("#start").prop("disabled", false);
});


$("#reset").click(function(){
    counter = 0;
    minute = 5;
    $("#time").text(minute + ":" + counter);
    $("#minus").prop("disabled", false);
});

$("#add").click(function () {
    minute++;
    $("#time").text(minute + ":" + counter);
    $("#minus").prop("disabled", false);
});

$("#minus").click(function () {
    if(minute === 1){
        $(this).attr("disabled", true);
    }
    else if(minute > 1){
        minute--;
        $("#time").text(minute + ":" + counter);
    }

});
