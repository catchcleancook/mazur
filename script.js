const hamburger = document.getElementById('hamburger');
const listed = document.getElementById ('listed');

hamburger.addEventListener('click', () => {
    listed.classList.toggle('show');
});

function myFunction(x) {
    x.classList.toggle("change");
  }