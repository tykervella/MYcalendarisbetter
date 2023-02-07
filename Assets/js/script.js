// Defines elements that will be used throughout the rest of the code 
var currentdateEl = document.querySelector('#currentDay');
var savebuttonEl = document.getElementsByClassName(".saveBtn");


//grabs today's date and displays it in current date element
var datetoday = dayjs().format('dddd, MMMM D YYYY');
currentdateEl.textContent = "Today's date is " + datetoday; 



//Event listener for save button to store the text description in local storage
$('.saveBtn').on("click",function(event){
  event.preventDefault()

  //grabs parent element of the save button
  var timeblock = $(this).parent().attr("id");
  //grabs sibling element to save button which is the description the user will type in for a set time
  var todoItem = $(this).siblings(".description").val();


  //save user input with the time id 
  localStorage.setItem(timeblock,todoItem);
  

}) 


// function to check the time and determine whether it is past, present, or future
function noworlater () {

  $(document).ready(function(){
    //cycles through each element with the time-block class
    $(".time-block").each(function(){
      //checks current hour
      var hourcounter = dayjs().hour();

      //parses the time of an element by spliting "time-7" to just be 7, and so forth 
      var timeblock = parseInt($(this).attr("id").split("-")[1])


      // adds different classes to the element depending on how it compares to the current time
      if (timeblock === hourcounter) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else if (timeblock > hourcounter) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      } else if (timeblock < hourcounter) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
      }
    })
  })
}
noworlater(); 



// checks local storage for any stored user inputs and displays them if they are there.
$("#time-7").children('.description').val(localStorage.getItem("time-7"))
$("#time-8").children('.description').val(localStorage.getItem("time-8"))
$("#time-9").children('.description').val(localStorage.getItem("time-9"))
$("#time-10").children('.description').val(localStorage.getItem("time-10"))
$("#time-11").children('.description').val(localStorage.getItem("time-11"))
$("#time-12").children('.description').val(localStorage.getItem("time-12"))
$("#time-13").children('.description').val(localStorage.getItem("time-13"))
$("#time-14").children('.description').val(localStorage.getItem("time-14"))
$("#time-15").children('.description').val(localStorage.getItem("time-15"))
$("#time-16").children('.description').val(localStorage.getItem("time-16"))
$("#time-17").children('.description').val(localStorage.getItem("time-17"))

