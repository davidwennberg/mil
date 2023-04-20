const menuItems = document.querySelectorAll('nav li');

menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Remove active class from all menu items
    menuItems.forEach(function(item) {
      item.classList.remove('active');
    });
    
    // Toggle active class on clicked menu item
    this.classList.toggle('active');
  });
});
