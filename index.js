
import { DateTime } from 'luxon';
var index = 0;
var slides = document.getElementsByClassName("slider");
var output = DateTime.now().plus({ days: 1 }).toRelativeCalendar();
console.log(output);

var slidesAuto = document.getElementsByClassName("sliderAutomatic");
if(slides.length != 0){slides[index].style.display = "block";}
if(slidesAuto.length != 0){
    slidesAuto[index].style.display = "block";
    sliderAuto();
}

function sliderAuto(){   
    slidesAuto[index].style.display = "none"; 
    index+=1; 
    if(index > slidesAuto.length-1) {
        index = 0;
       } 
       slidesAuto[index].style.display = "block";
    setTimeout(sliderAuto,5000);
}

function next(){
    slides[index].style.display = "none"; 
    index+=1; 
    if(index > slides.length-1) {
        index = 0;
       } 
    slides[index].style.display = "block";
}
function prev(){
    slides[index].style.display = "none"; 
    index-=1; 
    if(index < 0) {
        index = slides.length-1;
       } 
    slides[index].style.display = "block";
}
