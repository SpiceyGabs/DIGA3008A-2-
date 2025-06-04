// portfolioCarousel.js
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('#portfolioCarouselTrack');
  const leftArrow = document.querySelector('.leftArrow');
  const rightArrow = document.querySelector('.rightArrow');
  const filterButtons = document.querySelectorAll('.filterButton');
  const allCards = document.querySelectorAll('.portfolioCard');
  const cardWidth = 300 + 32; // 300px + margin/gap

  let scrollPosition = 0;

  // Arrows scroll
  rightArrow.addEventListener('click', () => {
    scrollPosition += cardWidth;
    track.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  });

  leftArrow.addEventListener('click', () => {
    scrollPosition -= cardWidth;
    if (scrollPosition < 0) scrollPosition = 0;
    track.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  });

  // Filters logic
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;

      // Sets active button style
      filterButtons.forEach(btn => btn.classList.remove('activeFilter'));
      button.classList.add('activeFilter');

      // Shows/hides cards
      allCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });

      // Resets scroll position
      scrollPosition = 0;
      track.scrollTo({ left: 0, behavior: 'auto' });
    });
  });
});
