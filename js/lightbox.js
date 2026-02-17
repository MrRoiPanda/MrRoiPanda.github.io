// Lightbox functionality for project gallery
document.addEventListener('DOMContentLoaded', function() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');
  
  let currentImageIndex = 0;
  let images = [];

  // Initialize image array
  function initImages() {
    images = Array.from(galleryItems).map(item => item.querySelector('img').src);
  }

  // Open lightbox
  function openLightbox(index) {
    currentImageIndex = index;
    lightboxImg.src = images[currentImageIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  // Show previous image
  function showPrevious() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentImageIndex];
  }

  // Show next image
  function showNext() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    lightboxImg.src = images[currentImageIndex];
  }

  // Event listeners for gallery items
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      openLightbox(index);
    });
  });

  // Close button
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  // Navigation buttons
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', showPrevious);
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', showNext);
  }

  // Close on background click
  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      showPrevious();
    } else if (e.key === 'ArrowRight') {
      showNext();
    }
  });

  // Initialize on load
  initImages();
});
