let arrowRight = document.querySelectorAll(".fa-arrow-right");

let para = document.querySelector("#bottom-p");
let para2 = document.querySelector("#bottom-p2");
let para3 = document.querySelector("#subscribe");


para.addEventListener("mouseenter", () => {
  arrowRight.forEach((element) => {
    element.style.transform = "rotate(0deg)";
  });
});
para.addEventListener("mouseout", () => {
  arrowRight.forEach((element) => {
    element.style.transform = "rotate(-22deg)";
  });
});
para2.addEventListener("mouseenter", () => {
  arrowRight.forEach((element) => {
    element.style.transform = "rotate(0deg)";
  });
});
para2.addEventListener("mouseout", () => {
  arrowRight.forEach((element) => {
    element.style.transform = "rotate(-22deg)";
  });
});
para3.addEventListener("mouseenter", () => {
  arrowRight.forEach((element) => {
    element.style.transform = "rotate(0deg)";
  });
});
para3.addEventListener("mouseout", () => {
  arrowRight.forEach((element) => {
    element.style.transform = "rotate(-22deg)";
  });
});

let time = new Date();
document.getElementById("time").innerHTML = time.toLocaleTimeString();