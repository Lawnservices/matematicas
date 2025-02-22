 
const currentUrl = window.location.pathname;

 
const links = document.querySelectorAll('.navbar ul li .nav-link');

 
links.forEach(link => {
  if (link.getAttribute('href') === currentUrl) {
    link.classList.add('active');  
  }
});
 