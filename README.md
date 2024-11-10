# Memory Game 

## Project Overview
The Memory Game is a web-based game built with React (frontend) and Node.js/Express (backend). The objective of the game is to match pairs of cards in as few moves as possible, testing the player’s memory skills. This project was designed to be interactive and engaging, with a 6x6 grid layout, 18 unique pairs, and a timer to track the completion time.

## Features
- **6x6 Grid Layout**: The game board consists of 36 cards (18 pairs).
- **Timer**: Tracks the time it takes to complete the game.
- **Responsive UI**: The game adjusts to different screen sizes.
- **Flip Animation**: Smooth transitions when flipping cards.
- **Score Tracking**: Tracks and displays the number of moves taken.

## Technologies Used
- **Frontend**: React, CSS Grid
- **Backend**: Node.js, Express
- **Additional Libraries**: Axios (optional for API calls)

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Portia-Nelly-Mashaba/Memory-Game--Node-JS.git
   cd memory-game
2. Install dependencies for the backend
    npm install
3. Navigate to the client folder and install frontend dependencies:
    cd client
    npm install
4. Start the server:
    npm run start
5. Start the React development server in the client directory:
    npm start

## How to Play
1. Click on any two cards to flip them over.
2. If the cards match, they remain face up. If not, they flip back down.
3. Continue matching pairs until all cards are face up.
4. Your score and time taken are displayed when you finish.