
//DOM manipulation for the "read more" of the carousels
document.addEventListener('DOMContentLoaded', () => {
  const readMoreButtons = document.querySelectorAll('.blogCard .roundButton[data-role="readMore"]');

  readMoreButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent jump if using <a>
      const excerpt = button.previousElementSibling;

      const isExpanded = excerpt.classList.toggle('isExpanded');

      if (isExpanded) {
        excerpt.style.maxHeight = 'none';
        excerpt.style.overflow = 'visible';
        button.textContent = 'Show Less';
      } else {
        excerpt.style.maxHeight = '120px';
        excerpt.style.overflow = 'hidden';
        button.textContent = 'Read More';
      }
    });
  });
});