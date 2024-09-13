// script.js

// Function to handle smooth scrolling when clicking on navigation links
function smoothScroll(target) {
    const element = document.querySelector(target);
    const position = element.getBoundingClientRect().top;
    const offset = 60; // Adjust this value to add some offset from the top
    window.scrollBy({
      top: position - offset,
      behavior: "smooth"
    });
  }
  
  // Function to animate sections when they come into view
  function animateOnScroll() {
    const sections = document.querySelectorAll("section");
    const windowHeight = window.innerHeight;
  
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight - 50) {
        section.classList.add("visible");
      }
    });
  }
  
  // Function to toggle active class on navigation links based on current section in view
  function updateActiveLink() {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY;
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop - 60 && scrollPosition < sectionTop + sectionHeight - 60) {
        const targetId = section.getAttribute("id");
        const navLinks = document.querySelectorAll("nav a");
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${targetId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }
  
  // Function to show or hide the "Back to Top" button based on scroll position
  function toggleBackToTopButton() {
    const backToTopButton = document.getElementById("back-to-top");
    if (window.scrollY >= 500) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  }
  
  // Function to scroll to top when "Back to Top" button is clicked
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  // Event listeners
  document.addEventListener("DOMContentLoaded", () => {
    animateOnScroll(); // Run the animation on page load
  
    // Smooth scrolling when clicking on navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        smoothScroll(targetId);
      });
    });
  
    // Update active link and animate on scroll
    window.addEventListener("scroll", () => {
      updateActiveLink();
      animateOnScroll();
      toggleBackToTopButton();
    });
  
    // Back to Top button
    const backToTopButton = document.getElementById("back-to-top");
    backToTopButton.addEventListener("click", scrollToTop);
  });