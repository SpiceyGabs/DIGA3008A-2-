
// This will apply the .active class to the correct link based on current URL
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navLink');

  const currentPage = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();

    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
});