"use strict"
let price = document.getElementsByClassName("price");
let slider = document.getElementById("myRange");
let pages = document.getElementsByClassName("text3");
let isChecked = document.getElementById("switch").checked;
let toggle = document.getElementsByClassName("toggle");
let time = document.getElementsByClassName("time");
let line = document.getElementsByClassName("slider-thumb");



console.log(toggle, isChecked);


price[0].innerHTML ="$" + slider.value+".00";

slider.oninput = function(){
    price[0].innerHTML = "$"+ this.value +".00";
    pageviews();
    let percent = this.value / 32 * 100;
    line[0].style.width = percent + "%";
}


toggle[0].addEventListener("click", function(){

    if(isChecked == false){
        isChecked =! false;
        time[0].innerHTML = "/ year"
        price[0].innerHTML = "$"+(slider.value * 12 * 0.75)  +".00";
        slider.oninput = function(){
            price[0].innerHTML = "$"+(slider.value * 12 * 0.75) +".00";
            pageviews();
            let percent = this.value / 32 * 100;
            line[0].style.width = percent + "%";
        }
        
    }else{
        isChecked =! true;
        time[0].innerHTML = "/ month"
        price[0].innerHTML = "$"+ slider.value +".00";
        slider.oninput = function(){
            price[0].innerHTML = "$"+ slider.value +".00";
            pageviews();
            let percent = this.value / 32 * 100;
            line[0].style.width = percent + "%";
        }
        
    }
})




function pageviews(){
    if( slider.value == 0 ){
        pages[0].innerHTML = "0K PAGEVIEWS"
    }
    if( slider.value == 4 ){
        pages[0].innerHTML = "2K PAGEVIEWS"
    }
    if( slider.value == 8){
        pages[0].innerHTML = "10K PAGEVIEWS"
    }
    if( slider.value == 12){
        pages[0].innerHTML = "50K PAGEVIEWS"
    }
    if( slider.value == 16){
        pages[0].innerHTML = "100K PAGEVIEWS"
    }
    if( slider.value == 20){
        pages[0].innerHTML = "250K PAGEVIEWS"
    }
    if( slider.value == 24){
        pages[0].innerHTML = "500K PAGEVIEWS"
    }
    if( slider.value == 28){
        pages[0].innerHTML = "750K PAGEVIEWS"
    }
    if( slider.value == 32){
        pages[0].innerHTML = "1M PAGEVIEWS"
    }
}

