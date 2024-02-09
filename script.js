window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar'); // Adjust if your navbar has a different selector
    if (window.scrollY > 50) { // Check if the page is scrolled more than 50 pixels
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });




document.addEventListener("DOMContentLoaded", function() {
  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fill');
      } else {
        entry.target.classList.remove('fill');
        entry.target.style.width = '0'; 
      }
    });
  }, {
    threshold: 0.5 
  });

  document.querySelectorAll('.skill-per').forEach(skill => {
    observer.observe(skill);
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const profileImg = document.getElementById('kabir');
    const aboutText = document.querySelector('#about div');

    profileImg.style.opacity = 0;
    aboutText.style.opacity = 0;

    setTimeout(() => {
        profileImg.style.opacity = 1;
        profileImg.style.transition = 'opacity 2s';
        aboutText.style.opacity = 1;
        aboutText.style.transition = 'opacity 2s';
    }, 500);
});

