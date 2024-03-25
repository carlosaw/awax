function imgSlider1() {
  const point1 = document.querySelector("#p1");
  point1.classList.add("active");
  const point2 = document.querySelector("#p2");
  point2.classList.remove("active");
  const point3 = document.querySelector("#p3");
  point3.classList.remove("active");
  document.querySelector("#slide1").style = "margin-left:0vw";
} 
function time1() {
  const point2 = document.querySelector("#p2");
  point2.classList.add("active");
  const point1 = document.querySelector("#p1");
  point1.classList.remove("active");
  const point3 = document.querySelector("#p3");
  point3.classList.remove("active");
  document.querySelector("#slide1").style = "margin-left:-100vw";
}
setInterval(time1, 2000);

function imgSlider2(){
  const point2 = document.querySelector("#p2");
  point2.classList.add("active");
  const point1 = document.querySelector("#p1");
  point1.classList.remove("active");
  const point3 = document.querySelector("#p3");
  point3.classList.remove("active");
  document.querySelector("#slide1").style = "margin-left:-200vw";
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
