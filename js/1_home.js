document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('mouseenter', function() {
        link.classList.add('hovered')
      });
      link.addEventListener('mouseleave', function() {
        link.classList.remove('hovered');
      });
    });
  });