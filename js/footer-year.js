// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
  const yearElements = document.querySelectorAll('#year');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });
});
