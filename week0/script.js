// var myClock0 = document.getElementById('Variables');
// var myClock1 = document.getElementById('Loops');
// var myClock2 = document.getElementById('Conditionals');
// var myClock3 = document.getElementById('Functions');
// var myClock4 = document.getElementById('Indexing');
// var myClock5 = document.getElementById('Arrays');
// var myClock6 = document.getElementById('NestedArrays');
// var myClock7 = document.getElementById('Objects');
//
// var displaySetting0 = myClock0.style.display;
// var displaySetting1 = myClock1.style.display;
// var displaySetting2 = myClock2.style.display;
// var displaySetting3 = myClock3.style.display;
// var displaySetting4 = myClock4.style.display;
// var displaySetting5 = myClock5.style.display;
// var displaySetting6 = myClock6.style.display;
// var displaySetting7 = myClock7.style.display;
//
window.onload=func1;
function func1(){
  myClock1.style.display = 'none';
}



var myClock = document.getElementById('first');
var displaySetting = myClock.style.display;
var myClock1 = document.getElementById('firstQ');
var displaySetting1 = myClock1.style.display;
function variables(){
  myClock.style.display = 'none';
  var typed = new Typed("#title", {
  strings: ["Welcome to your review on variables."],
  typeSpeed:100,
  showCursor: false,
  });
  var typed1 = new Typed("#start", {
    strings: ["Fisrt task"],
    showCursor: false,
    typeSpeed:100,
    startDelay:5000,
  });
  var typed2 = new Typed("#first1", {
    strings: ["Declare a variable"],
    showCursor: false,
    typeSpeed:100,
    startDelay:7000,


  });
      myClock1.style.display = 'block';
}
function varcheck(){
  $('#check').empty;

 var asd = document.getElementById('var').value;

 if(asd.includes("var ") == true && asd.includes(";") == true){
   var typed3 = new Typed("#check", {
     strings: ["Correct"],
     showCursor: false,
     typeSpeed:100,
     resetCallback: function() {
     }
 		// callback for reset
   });
 }else{
   var typed3 = new Typed("#check", {
     strings: ["Try Again"],
     showCursor: false,
     typeSpeed:100,
     resetCallback: function() {
       $('h1').removeData('typed');
     }
   // callback for reset
   });
 }
}
function loops(){
  myClock.style.display = 'none';
  $('#variables').append("<h1>Welcome to your review on loops.</h1>");
}
function conditionals(){
  myClock.style.display = 'none';
  $('#variables').append("<h1>Welcome to your review on conditionals.</h1>");
}
function functions(){
  myClock.style.display = 'none';
  $('#variables').append("<h1>Welcome to your review on functions.</h1>");
}
function indexing(){
  myClock.style.display = 'none';
  $('#variables').append("<h1>Welcome to your review on indexing.</h1>");
}
function arrays(){
  myClock.style.display = 'none';
  $('#variables').append("<h1>Welcome to your review on arrays.</h1>");
}
function nestedArrays(){
  myClock.style.display = 'none';
  $('#variables').append("<h1>Welcome to your review on nested arrays.</h1>");
}
function objects(){
  myClock.style.display = 'none';
  $('#variables').append("<h1>Welcome to your review on objects.</h1>");
}
