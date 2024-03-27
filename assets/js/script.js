/**automaticSliders */
// setInterval(() => {  
//   setTimeout(function() {
//     imgSlider2();
//   }, 4000);
//   setTimeout(function() {
//     imgSlider3();
//   }, 8000);
//   setTimeout(function() {
//     imgSlider1();
//   }, 12000);
// }, 12000);

function imgSlider1() {
  const point1 = document.querySelector("#p1");
  point1.classList.add("active");
  const point2 = document.querySelector("#p2");
  point2.classList.remove("active");
  const point3 = document.querySelector("#p3");
  point3.classList.remove("active");
  document.querySelector("#slide1").style = "margin-left:0vw"; 
}
  
function imgSlider2(){
  const point2 = document.querySelector("#p2");
  point2.classList.add("active");
  const point1 = document.querySelector("#p1");
  point1.classList.remove("active");
  const point3 = document.querySelector("#p3");
  point3.classList.remove("active");
  document.querySelector("#slide1").style = "margin-left:-100vw";
}

function imgSlider3(){
  const point3 = document.querySelector("#p3");
  point3.classList.add("active");
  const point1 = document.querySelector("#p1");
  point1.classList.remove("active");
  const point2 = document.querySelector("#p2");
  point2.classList.remove("active");  
  document.querySelector("#slide1").style = "margin-left:-200vw";   
}