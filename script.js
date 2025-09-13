document.addEventListener("DOMContentLoaded", function() {
  // Existing alert function
  function showMessage() {
    alert("Welcome to the College of Industrial Technology! Explore our programs and opportunities.");
  }

  // Dark/Light mode toggle
  const toggleButton = document.getElementById("toggleMode");

  toggleButton.addEventListener("click", function() {
    // Toggle dark mode class on body
    document.body.classList.toggle("dark-mode");

    // Update button text based on current mode
    if (document.body.classList.contains("dark-mode")) {
      toggleButton.textContent = "Light Mode";
    } else {
      toggleButton.textContent = "Dark Mode";
    }
  });

  // Expose showMessage globally so button can still use onclick in HTML
  window.showMessage = showMessage;
});

document.addEventListener("DOMContentLoaded", function () {
      const learnMoreBtn = document.getElementById("learnMoreBtn");
      const customPopup = document.getElementById("customPopup");
      const closePopup = document.getElementById("closePopup");

      // Show popup
      learnMoreBtn.addEventListener("click", () => {
        customPopup.style.display = "block";
      });

      // Hide popup
      closePopup.addEventListener("click", () => {
        customPopup.style.display = "none";
      });
    });