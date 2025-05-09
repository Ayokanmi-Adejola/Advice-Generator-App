// Advice Generator App JavaScript

// DOM Elements
const adviceNumber = document.getElementById('advice-number');
const adviceText = document.getElementById('advice-text');
const diceButton = document.getElementById('dice-button');

// Function to fetch advice from the API
async function getAdvice() {
    try {
        // Show loading state
        adviceText.textContent = 'Loading...';

        // Fetch advice from the API
        // Using a cache-busting parameter to avoid getting the same advice due to API caching
        const response = await fetch('https://api.adviceslip.com/advice?t=' + Math.random());

        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Failed to fetch advice');
        }

        // Parse the JSON response
        const data = await response.json();

        // Update the DOM with the new advice
        adviceNumber.textContent = data.slip.id;
        adviceText.textContent = data.slip.advice;
    } catch (error) {
        // Handle any errors
        console.error('Error fetching advice:', error);
        adviceText.textContent = 'Failed to load advice. Please try again.';
    }
}

// Add event listener to the dice button
diceButton.addEventListener('click', getAdvice);

// Load advice when the page loads
document.addEventListener('DOMContentLoaded', getAdvice);
