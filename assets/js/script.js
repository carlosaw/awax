/** automaticSliders BANNER */
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

/* Sliders BANNER */
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


/* Sliders TEAM */
function imgSlider11() {
  const point1 = document.querySelector("#p11");
  point1.classList.add("active");
  const point2 = document.querySelector("#p22");
  point2.classList.remove("active");
  const point3 = document.querySelector("#p33");
  point3.classList.remove("active"); 
  const point4 = document.querySelector("#p44");
  point4.classList.remove("active"); 
  document.querySelector("#slide1-1").style = "margin-left:0vw";
} 
function imgSlider22(){
  const point2 = document.querySelector("#p22");
  point2.classList.add("active");
  const point1 = document.querySelector("#p11");
  point1.classList.remove("active");
  const point3 = document.querySelector("#p33");
  point3.classList.remove("active");
  const point4 = document.querySelector("#p44");
  point4.classList.remove("active");
  document.querySelector("#slide1-1").style = "margin-left:-780px";
}
function imgSlider33(){
  const point3 = document.querySelector("#p33");
  point3.classList.add("active");
  const point1 = document.querySelector("#p11");
  point1.classList.remove("active");
  const point2 = document.querySelector("#p22");
  point2.classList.remove("active"); 
  const point4 = document.querySelector("#p44");
  point4.classList.remove("active"); 
  document.querySelector("#slide1-1").style = "margin-left:-1560px";   
}
function imgSlider44(){
  const point4 = document.querySelector("#p44");
  point4.classList.add("active");
  const point1 = document.querySelector("#p11");
  point1.classList.remove("active");
  const point2 = document.querySelector("#p22");
  point2.classList.remove("active");  
  const point3 = document.querySelector("#p33");
  point3.classList.remove("active");
  document.querySelector("#slide1-1").style = "margin-left:-2336px";   
}

/** automaticSliders TEAM */
// setInterval(() => {  
//   setTimeout(function() {
//     imgSlider22();
//   }, 4000);
//   setTimeout(function() {
//     imgSlider33();
//   }, 8000);
//   setTimeout(function() {
//     imgSlider44();
//   }, 12000);
//   setTimeout(function() {
//     imgSlider11();
//   }, 16000);
// }, 16000);


/* Sliders CLIENTS */
function imgSlider111() {
  const point1 = document.querySelector("#p111");
  point1.classList.add("active");
  const point2 = document.querySelector("#p222");
  point2.classList.remove("active");
  const point3 = document.querySelector("#p333");
  point3.classList.remove("active"); 
  // const point4 = document.querySelector("#p44");
  // point4.classList.remove("active"); 
  document.querySelector("#slide1-1-1").style = "margin-left:0vw";
} 
function imgSlider222(){
  const point2 = document.querySelector("#p222");
  point2.classList.add("active");
  const point1 = document.querySelector("#p111");
  point1.classList.remove("active");
  const point3 = document.querySelector("#p333");
  point3.classList.remove("active");
  // const point4 = document.querySelector("#p44");
  // point4.classList.remove("active");
  document.querySelector("#slide1-1-1").style = "margin-left:-750px";
}
function imgSlider333(){
  const point3 = document.querySelector("#p333");
  point3.classList.add("active");
  const point1 = document.querySelector("#p111");
  point1.classList.remove("active");
  const point2 = document.querySelector("#p222");
  point2.classList.remove("active"); 
  // const point4 = document.querySelector("#p44");
  // point4.classList.remove("active"); 
  document.querySelector("#slide1-1-1").style = "margin-left:-1500px";   
}
/** automaticSliders TEAM */
// setInterval(() => {  
//   setTimeout(function() {
//   imgSlider222();
//   }, 4000);
//   setTimeout(function() {
//     imgSlider333();
//   }, 8000);
//   setTimeout(function() {
//     imgSlider111();
//   }, 12000);
//   // setTimeout(function() {
//   //   imgSlider444();
//   // }, 16000);
// }, 16000);