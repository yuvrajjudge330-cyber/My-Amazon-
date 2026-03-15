// script.js

// 1. Panel All button toggle
const panelAll = document.querySelector('.panel-all');
const panelOps = document.querySelector('.panel-ops');

panelAll.addEventListener('click', () => {
  panelOps.classList.toggle('active'); // active class toggle
});

// 2. Search input enter press
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter'){
    alert('Searching for: ' + searchInput.value);
  
}

// 3. Hero message link click
const heroLink = document.querySelector('.hero-msg a');

heroLink.addEventListener('click', (e) => {
  e.preventDefault(); // default action prevent
  alert('Redirecting to amazon.in');
});