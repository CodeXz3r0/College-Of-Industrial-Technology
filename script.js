// Sidebar toggle
const menuBtn = document.getElementById
('menu-btn');
const sidebar = document.getElementById
('sidebar');

menuBtn.addEventListener('click', () => 
{sidebar.classList.toggle('active');});



// Quotes
const quotes = [
  { text: "Victorious warriors win first and then go to war.", credit: "Sun Tzu" },
  
  { text: "The supreme art of war is to subdue the enemy without fighting.", credit: "Sun Tzu" },
  
  { text: "Do not pursue goals that are easily achieved. Pursue ones that demand your full potential.", credit: "Zhuge Liang" },
  
  { text: "Opportunities multiply as they are seized.", credit: "Sun Tzu" },
  
  { text: "Those who are skilled in combat do not become angered.", credit: "Sun Tzu" }];

function updateQuote() 
{const hour = new Date().getHours();
  const index = hour % quotes.length;
  document.getElementById('quote').textContent = quotes[index].text;
  document.getElementById('credit').textContent = `– ${quotes[index].credit}`;}


updateQuote();
setInterval(updateQuote, 3600000); // refresh every hour



// Dark / Light Mode Toggle
const modeBtn = document.getElementById
('mode-toggle');

  modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  if 
  (document.body.classList.contains('light-mode')) 
  {modeBtn.textContent = "Dark Mode";} 
  else 
  { modeBtn.textContent = "Light Mode";}});