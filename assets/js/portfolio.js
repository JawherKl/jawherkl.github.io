document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  
    // Scroll animations
    const scrollElements = document.querySelectorAll(".scroll-in");
  
    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
    };
  
    const displayScrollElement = (element) => {
      element.classList.add("scrolled");
    };
  
    scrollElements.forEach((el) => {
      if (elementInView(el)) displayScrollElement(el);
    });
  });