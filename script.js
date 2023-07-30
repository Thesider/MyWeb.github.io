const rickrollButton = document.getElementById('rickroll-button');
const rickrollVideoURL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

rickrollButton.addEventListener('click', () => {
  window.location.href = rickrollVideoURL;
});
