var seconds = 0;
var minute = 5;
var countdown;
$("#time").text(minute + ":" + "00");

$("#start").click(function(){
    countdown = setInterval(function(){

        console.log(seconds);
        if(minute > -1){
            timer();
        }


        display();

    }, 1000);

    $(this).prop("disabled", true);
});

$("#pause").click(function(){
    clearInterval(countdown);
    $("#start").prop("disabled", false);
});


$("#reset").click(function(){
    seconds = 0;
    minute = 5;
    display();
    $("#minus").prop("disabled", false);
});

$("#add").click(function () {
    minute++;
    display();
    $("#minus").prop("disabled", false);
});

$("#minus").click(function () {

    if(minute === 1){
        $(this).attr("disabled", true);
    }
    else if(minute > 1){
        minute--;
        display();
    }

});

function timer() {
    seconds--;
    if(minute === 0 && seconds === 0){
        alert("Times Up");
        clearInterval(countdown);
    }
        if(seconds<0 && minute > -1) {
            minute--;
            seconds = 59;
        }

}

function display() {
    if(seconds < 10){
        $("#time").text(minute + ":" + "0" + seconds);
    }
    else if(seconds === 60){
        $("#time").text(minute + ":" + "00");
    }
    else{
        $("#time").text(minute + ":" + seconds);
    }
}