// Your code goes here


// Make Brand H1 Blue - Click - 1
const logo = document.querySelector(".logo-heading");
logo.addEventListener("click",() => {
logo.style.color = "blue";

});

// Make Brand Black - Double Click - 2
logo.addEventListener("dblclick", () => {
  logo.style.color = "black";

});

// Creating a "hover" on nav-link(s) - 3
const introImg = document.querySelector(".intro img");
introImg.addEventListener("mouseover", () => {
  introImg.style.transform = "scale(1.5)"
  introImg.style.transition = "all 0.3s"
});
// Reverting image - 4
introImg.addEventListener("mouseout", () => {
  introImg.style.transform = "scale(1)"
});

//changing body color on wheel - 5
const bdy = document.querySelector('body');
bdy.addEventListener("wheel", () => {
  bdy.style.backgroundColor = "silver";
})

// changing body color on button down - 6
bdy.addEventListener("keydown", () => {
  bdy.style.backgroundColor = "orange";
})

// Onload = Body Color = purple - 7
window.onload = (e) => {
  bdy.style.backgroundColor = "purple";
}

// context-menu => body color green - 8
bdy.addEventListener("contextmenu", ()=> {
  bdy.style.backgroundColor = "green"
});

// mouse enter
const navExit = document.querySelectorAll("nav a");
navExit.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.backgroundColor = "brown"
})
})

navExit.forEach(link => {
  link.addEventListener("mouseout", () => {
    link.style.backgroundColor = "hotpink"
})
})