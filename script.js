// Simple button interaction
const ctaBtn = document.getElementById('cta-btn');

ctaBtn.addEventListener('click', () => {
    alert('Thanks for visiting! Feel free to reach out.');
    
    // Changing text dynamically
    const nameDisplay = document.getElementById('name-display');
    nameDisplay.innerText = "ready to work with you!";
});


