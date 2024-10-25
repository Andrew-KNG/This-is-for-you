const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const contentBox = document.getElementById('contentBox');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', function() {
  contentBox.classList.add('show-content');
  overlay.classList.add('show-overlay');
});

closeBtn.addEventListener('click', function() {
  contentBox.classList.remove('show-content');
  overlay.classList.remove('show-overlay');
});
