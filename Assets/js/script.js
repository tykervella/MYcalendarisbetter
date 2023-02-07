// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// Define elements that will be used throughout the rest of the code 
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


function noworlater () {

  $(document).ready(function(){
    $(".time-block").each(function(){
      var hourcounter = dayjs().hour();

      var timeblock = parseInt($(this).attr("id").split("-")[1])

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


$(function () {
 
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 
});
