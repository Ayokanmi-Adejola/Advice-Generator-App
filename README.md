# Frontend Mentor - Advice Generator App Solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Desktop View](./preview.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/Ayokanmi-Adejola/Advice-Generator-App)
- Live Site URL: [Live Demo](https://ayokanmi-adejola.github.io/Advice-Generator-App/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- Fetch API for asynchronous requests

### What I learned

This project was a great opportunity to practice working with external APIs and handling asynchronous JavaScript. I learned how to:

- Make API requests using the Fetch API
- Handle loading states and errors in API requests
- Create responsive designs that work well on both mobile and desktop
- Implement hover effects for interactive elements

Some code snippets I'm proud of:

```html
<picture>
  <source media="(min-width: 768px)" srcset="./images/pattern-divider-desktop.svg">
  <img src="./images/pattern-divider-mobile.svg" alt="divider">
</picture>
```

```css
.dice-button:hover {
  box-shadow: 0 0 40px var(--neon-green);
}
```

```js
async function getAdvice() {
    try {
        // Show loading state
        adviceText.textContent = 'Loading...';

        // Fetch advice from the API with cache-busting
        const response = await fetch('https://api.adviceslip.com/advice?t=' + Math.random());

        if (!response.ok) {
            throw new Error('Failed to fetch advice');
        }

        const data = await response.json();

        // Update the DOM with the new advice
        adviceNumber.textContent = data.slip.id;
        adviceText.textContent = data.slip.advice;
    } catch (error) {
        console.error('Error fetching advice:', error);
        adviceText.textContent = 'Failed to load advice. Please try again.';
    }
}
```

### Continued development

In future projects, I would like to focus on:

- Implementing more advanced animations and transitions
- Exploring more complex API interactions
- Improving accessibility features
- Learning more about error handling and edge cases in web applications

### Useful resources

- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - This helped me understand how to make API requests using the Fetch API.
- [CSS-Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This is an excellent resource for understanding Flexbox layout.
- [Web.dev - Responsive Design](https://web.dev/responsive-web-design-basics/) - This helped me create a responsive design that works well on different screen sizes.

## Author

- Website - [Ayokanmi Adejola](https://ayokanmi-adejola-portfolio.netlify.app/)
- Frontend Mentor - [@AyokanmiAdejola](https://www.frontendmentor.io/profile/Ayokanmi-Adejola)
- Twitter - [@AyokanmiAdejola](https://x.com/AyoAdejola100)
