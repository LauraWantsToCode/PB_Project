
 function Show1() {
     document.getElementById("hovertext").innerHTML="Click on this button for information about visa requirements and COVID restrictions";
 }
 
 function Show2() {
     document.getElementById("hovertext").innerHTML="Click on this button to view the distance between the attractions you want to see";
 }


 function Show3() {
     document.getElementById("hovertext").innerHTML="Click on this button to make sure you have packed everything you need!";
 }


 function Show4() {
   
     document.getElementById("hovertext").innerHTML="Click on this button to find out what you will have to do in regards to Covid restrictions on your return";
 }


 function Hide1() {
     document.getElementById("hovertext").innerHTML=" ";
 }

 function Hide2() {
     document.getElementById("hovertext").innerHTML=" ";
 }

 function Hide3() {
     document.getElementById("hovertext").innerHTML=" ";
 }

 function Hide4() {
     document.getElementById("hovertext").innerHTML=" ";
 }


document.getElementById("formbutton").onclick = function(e){  //add e - event
var name = document.getElementById("input1").value 
var place = document.getElementById("input2").value 
document.getElementById("TripInfo").innerHTML=`Hello, ${name}.  You would like to visit ${place}`

e.preventDefault(); // e is required for the page to not refresh (default behaviour)
}

