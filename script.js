// Sidebar toggle
const menuBtn = document.getElementById
("menu-btn");
const sidebar = document.getElementById
("sidebar");

menuBtn.addEventListener("click", () => 
{sidebar.classList.toggle("active");});

// Light / Dark mode toggle
const modeToggle = document.getElementById("mode-toggle");

modeToggle.addEventListener("click", () => 
{document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) 
  {modeToggle.textContent = "Dark Mode";} 
    else 
    {modeToggle.textContent = "Light Mode";}});

// Quotes that change every hour
const quotes = [
  { text: "Excellence is not an act, but a habit.", credit: "Aristotle" },
  
  { text: "Education is the most powerful weapon to change the world.", credit: "Nelson Mandela" },
  
  { text: "Success is where preparation meets opportunity.", credit: "Bobby Unser" },
  
  { text: "Learning never exhausts the mind.", credit: "Leonardo da Vinci" },
  
  { text: "Knowledge is power.", credit: "Francis Bacon" }];

function showQuote() 
  {const hour = new Date().getHours();
  const index = hour % quotes.length;
  document.getElementById("quote").textContent = `"${quotes[index].text}"`;
  document.getElementById("credit").textContent = `– ${quotes[index].credit}`;}

// Run once on page load
showQuote();

// Update every hour (3600000 ms)
setInterval(showQuote, 3600000);
