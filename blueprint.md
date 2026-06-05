# Project Overview
Premium Lotto Generator is a web application that generates 6 random numbers (1-45) for users. It features a modern, premium UI with smooth animations and responsive design.

# Current Features
- Modern UI with backdrop blur and premium textures.
- **Theme Support:** Interactive Dark/Light mode toggle with persistence (localStorage).
- Interactive "Generate Numbers" button with glow effects.
- Animated number balls with color variations.
- Responsive layout for mobile and desktop.

# Recent Changes (June 5, 2026)
## Feature: Dark/Light Mode
- **Implementation:** Added CSS variables for both modes and a toggle button in the UI.
- **Persistence:** User's theme preference is saved in `localStorage`.
- **Transitions:** Smooth CSS transitions between themes for a premium feel.

## Fix: Number Generation Logic
- **Issue:** The button was not generating numbers because the logic was encapsulated in an unused Web Component.
- **Solution:** Rewrote `main.js` to directly target DOM elements (`#generate-btn` and `#lotto-numbers`).
- **Details:**
    - Implemented `generateLottoNumbers` to return 6 unique sorted numbers.
    - Added `createBall` helper to create styled ball elements with animation delays.
    - Connected the logic to the click event of the "Generate Numbers" button.
    - Added a small visual feedback (scale effect) when clicking the button.
