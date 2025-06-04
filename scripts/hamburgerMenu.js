document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.querySelector('#hamburgerBtn');
  const mobileDropdown = document.querySelector('#mobileDropdown');

  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    mobileDropdown.classList.toggle('open');
  });

  // Optional: Close menu when a link is clicked
  const links = document.querySelectorAll('.dropdownNavList a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn.classList.remove('active');
      mobileDropdown.classList.remove('open');
    });
  });
});