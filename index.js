var todayDate= document.getElementById("dateInput");
var calBtn= document.getElementById("calBtn")
var birthdayDate = new Date("August 16, 1998");
var yearBtn = document.getElementById("yearBtn");
var monthBtn = document.getElementById("monthBtn");
var daysBtn = document.getElementById("daysBtn");
calBtn.addEventListener("click", function(){
   var val = new Date(todayDate.value);
   var yearsDifference = val.getFullYear() - birthdayDate.getFullYear();
   var monthsDifference = val.getMonth() - birthdayDate.getMonth(); 
   var totalMonths = yearsDifference*12 +monthsDifference ;
   var totalDays = Math.floor((val - birthdayDate) / (1000 * 60 * 60 * 24));
   yearBtn.innerText = (`${yearsDifference}\n\nYears`);
   monthBtn.innerText = (`${totalMonths}\n\nYears`);
   daysBtn.innerText = (`${totalDays}\n\nYears`);
   yearBtn.style.height = "100px";
   monthBtn.style.height = "100px";
   daysBtn.style.height = "100px";
});
gsap.set("body", { overflow: "hidden" });
 var t1 = gsap.timeline();
t1.from("#first-div",{
   x:-750,
   duration:2,
   delay:1,
})
t1.from("#yearBtn",{
   x:-750,
   duration:2,
})
t1.from("#monthBtn",{
   y:-750,
   duration:2,
})
t1.from("#daysBtn",{
   y:750,
   duration:2,
   overflow: "hidden" 
})