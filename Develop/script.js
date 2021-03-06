//moment declaration for day and time 
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
//moment Current time 
var currentTime = moment();
//return current time to the nearest hour
currentTime = currentTime.startOf("hour");
//calculates the start of day + 9 to return to 9AM
var beforeTime = moment().startOf('day').add(9, "hours");

//time blocks
//9AM 
var time1 = beforeTime.add(0, "h");
time1 = time1.format('hh:mm');
//populates time formula into html
$(".block1").text(time1);
//10AM
var time2 = beforeTime.add(1, "h");
time2 = time2.format('hh:mm');
$(".block2").text(time2);
//11AM
var time3 = beforeTime.add(1, "h");
time3 = time3.format('hh:mm');
$(".block3").text(time3);
//12PM
var time4 = beforeTime.add(1, "h");
time4 = time4.format('hh:mm');
$(".block4").text(time4);
//1PM
var time5 = beforeTime.add(1, "h");
time5 = time5.format('hh:mm');
$(".block5").text(time5);
//2PM
var time6 = beforeTime.add(1, "h");
time6 = time6.format('hh:mm');
$(".block6").text(time6);
//3PM
var time7 = beforeTime.add(1, "h");
time7 = time7.format('hh:mm');
$(".block7").text(time7);
//4PM
var time8 = beforeTime.add(1, "h");
time8 = time8.format('hh:mm');
$(".block8").text(time8);
//5PM
var time9 = beforeTime.add(1, "h");
time9 = time9.format('hh:mm');
$(".block9").text(time9);

//a function to compare hours with current time 
function testTime() {
    //time1 is 9AM
    time1 = moment().startOf('day').add(9, "hours");
    //adjusts current time to the hour
    currentTime = currentTime.startOf("hour");
    //add time1 if/else
    if (currentTime.isAfter(time1)) {
        $(".form9").addClass("past");
    }
    else if (currentTime.isBefore(time1)) {
        $(".form9").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".form9").addClass("present");
    };
    //time2 is 10AM
    time2 = moment().startOf('day').add(10, "hours");
    //add time2 if/else
    if (currentTime.isAfter(time2)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".form10").addClass("present");
    };
    //time3 is 11AM
    time3 = moment().startOf('day').add(11, "hours");
    //add time3 if/else
    if (currentTime.isAfter(time3)) {
        $(".form11").addClass("past");
    }
    else if (currentTime.isBefore(time3)) {
        $(".form11").addClass("future");
    }
    else if (currentTime.isSame(time3)) {
        $(".form11").addClass("present");
    };
    //time4 is 12PM
    time4 = moment().startOf('day').add(12, "hours");
    //add time4 if/else
    if (currentTime.isAfter(time4)) {
        $(".form12").addClass("past");
    }
    else if (currentTime.isBefore(time4)) {
        $(".form12").addClass("future");
    }
    else if (currentTime.isSame(time4)) {
        $(".form12").addClass("present");
    };
    //time5 is 1PM
    time5 = moment().startOf('day').add(13, "hours");
    //add time5 if/else
    if (currentTime.isAfter(time5)) {
        $(".form1").addClass("past");
    }
    else if (currentTime.isBefore(time5)) {
        $(".form1").addClass("future");
    }
    else if (currentTime.isSame(time5)) {
        $(".form1").addClass("present");
    };
    //time6 is 2PM
    time6 = moment().startOf('day').add(14, "hours");
    //add time6 if/else
    if (currentTime.isAfter(time6)) {
        $(".form2").addClass("past");
    }
    else if (currentTime.isBefore(time6)) {
        $(".form2").addClass("future");
    }
    else if (currentTime.isSame(time6)) {
        $(".form2").addClass("present");
    };
    //time7 is 3M
    time7 = moment().startOf('day').add(15, "hours");
    //add time7 if/else
    if (currentTime.isAfter(time7)) {
        $(".form3").addClass("past");
    }
    else if (currentTime.isBefore(time7)) {
        $(".form3").addClass("future");
    }
    else if (currentTime.isSame(time7)) {
        $(".form3").addClass("present");
    };
    //time8 is 4pm
    time8 = moment().startOf('day').add(16, "hours");
    //add time8 if/else
    if (currentTime.isAfter(time8)) {
        $(".form4").addClass("past");
    }
    else if (currentTime.isBefore(time8)) {
        $(".form4").addClass("future");
    }
    else if (currentTime.isSame(time8)) {
        $(".form4").addClass("present");
    };
    //time9 is 5pm
    time9 = moment().startOf('day').add(17, "hours");
    //add time9 if/else
    if (currentTime.isAfter(time9)) {
        $(".form5").addClass("past");
    }
    else if (currentTime.isBefore(time9)) {
        $(".form5").addClass("future");
    }
    else if (currentTime.isSame(time9)) {
        $(".form5").addClass("present");
    };
}
testTime();
//loops through input area to get item from local storage
var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);
    // form - control
    $(".form" + x[i]).val(dataHour);
}
//event listener to save to local stroage
$(".saveBtn").click(function () {
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("This worked");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, formValue);
});