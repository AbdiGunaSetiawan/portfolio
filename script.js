// Navbar Active
const nav = document.getElementById("navbar");
let lastXPost = 0;
window.addEventListener("scroll", function(e) {
  lastXPost = window.scrollY;
  if (lastXPost > 100) {
    nav.classList.add("active");
  }
  else {
    nav.classList.remove("active")
  }
})


// Navbar Toggle
const navToggle = document.querySelector("nav .navbar-toggle-wrapper");
navToggle.addEventListener("click", function() {
  navToggle.classList.toggle("active");
})



// Parallax
const fotoProfile = document.getElementById("foto-profile");
const textHeading = document.getElementById("text-heading");
const textParagraf = document.getElementById("text-paragraf");

const linkedin = document.querySelector(".icon-items.linkedin");
const github = document.querySelector(".icon-items.github");
const discord = document.querySelector(".icon-items.discord");
const twitter = document.querySelector(".icon-items.twitter");
const instagram = document.querySelector(".icon-items.instagram");
 
const about1 = document.querySelector(".about1");
const about2 = document.querySelector(".about2");
const sectionAbout = document.getElementById("about");

const projectContainer = document.getElementById("projects-container");
const projectItem = projectContainer.querySelectorAll(".project-item")



window.addEventListener("scroll", function(e) {

  if (window.scrollY > (sectionAbout.offsetTop - 200)) {
    about1.classList.add("landing");
    about2.classList.add("landing");
  }
  
  if (window.scrollY > (projectContainer.offsetTop - 200)) {
    projectItem.forEach(function(item) {
      item.classList.add("landing");
    })
  }
})


window.addEventListener("load", function() {

  if (document.readyState === "complete") {
    fotoProfile.classList.add("landing");
    textHeading.classList.add("fadeIn");
    textParagraf.classList.add("fadeIn");


    setTimeout(function() {
      linkedin.classList.add("active");
      github.classList.add("active");
      discord.classList.add("active");
      twitter.classList.add("active");
      instagram.classList.add("active");
    }, 1000)

  }

})