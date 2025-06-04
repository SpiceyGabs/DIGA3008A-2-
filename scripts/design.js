document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.designCard .roundButton[data-role="readMore"]')

  designButtons.forEach(button => {
    button.addEventListener('click', () => {
      const excerpt = button.previousElementSibling;

      if (excerpt.style.maxHeight !== 'none') {
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