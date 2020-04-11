// console.log(moment().format('LL'))
// page loads
// get items from local storage to the page - set

// use momentjs to append "today's date" to page
var displayDate = moment().format('LL')
$("#currentDay").text(displayDate)
// use momentjs for current time (for past, present, future slots)

// select all timeslots on page - queryselectorall
// grab data time from each hour slot 
// grab current time from moments - twentyfour-hour format

// compare the data time to current time
// depending on data-time <>= is where you assign past, present, future - .addclass

// color-code past, present, future slots using classes or bootstrap 

// on-click event listener for the save button
// capture value of user input
// set value to a variable 
// within the block time-frame, capture/connect correct time slot
$( ".saveButton" ).click(function() {
    // console.log(this)
    var input = $(this).parent().prev().children('.userInput').val();
    // console.log(input)
    var timeSlot = $(this).parent().prev().prev().children(".hourSlot").data("time");
    // console.log(timeSlot)
    
    // user sees their saved information
    // user inputs a value and hits "save"
    // when user hits "save" it goes to local storage & will stay if page is refereshed
    });
// after all necessary information has been captured, we can save to local storage

// BONUS add a delete button for cleaing local storage values



