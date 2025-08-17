// Header
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.modern-header');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNav');
  
  // Header scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  mobileToggle.addEventListener('click', function() {
    mobileToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on nav items
  document.querySelectorAll('.mobile-nav-item, .mobile-cta-button').forEach(item => {
    item.addEventListener('click', function() {
      mobileToggle.classList.remove('active');
      mobileNav.classList.remove('active');
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
