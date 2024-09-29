var todayDate= document.getElementById("dateInput");
var calBtn= document.getElementById("calBtn")
var birthdayDate = new Date("August 16, 1998");
var mm = birthdayDate.getMonth();
alert(mm);
calBtn.addEventListener("click", function(){
    var val = todayDate.value;
  var totalAge = birthdayDate + val;
//    var Age = totalAge / (1000*60*60*24);

  console.log(totalAge);

});



// var outputBtnsDiv= document.getElementById("outputBtns")


















// calBtn.addEventListener("click", function(){
//     console.log(birthday);
// });