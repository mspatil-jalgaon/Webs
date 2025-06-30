function toggleMenu() {
  const menu = document.getElementById('epMenu');
  menu.classList.toggle('active');
}

// Toggle submenus in mobile view
document.addEventListener('DOMContentLoaded', function () {
  const parentItems = document.querySelectorAll('.ep_tm_menu > li');

  parentItems.forEach(item => {
    item.addEventListener('click', function (e) {
      if (window.innerWidth <= 970 && item.querySelector('ul')) {
        e.stopPropagation();
        e.preventDefault();
        item.classList.toggle('active');
      }
    });
  });
});
