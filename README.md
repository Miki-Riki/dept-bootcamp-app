# DEPT Bootcamp - Color Palette App

This project is a React application built for the DEPT 2025 bootcamp assignment.  
It allows users to fetch random colors, save their favorite colors to a palette, and remove colors from the palette. The palette is persisted in local storage.

---

## Features

- Fetches a list of random colors from a protected API endpoint.
- Displays colors in a grid with hex codes.
- Allows saving and removing colors from a user palette.
- Palette data is stored locally in the browser.
- Simple, responsive UI with inline and Tailwind CSS styles.

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Miki-Riki/dept-bootcamp-app.git
   cd dept-bootcamp-app

2. Install dependencies:
    ```bash
    npm install

3. Start the development server:
   ```bash
   npm start
   
4. Open http://localhost:3000 to view it in the browser.

##Project Structure
src/pages/ColorApp.jsx — Main component managing color fetch, palette, and UI.

src/components/ColorGrid.jsx — Displays fetched colors with Save buttons.

src/components/Palette.jsx — Shows saved palette colors with Remove buttons.

src/api/client.js — Axios instance with authentication interceptors.

src/utils/storage.js — Helper functions to save/load palette to/from localStorage.

src/index.css — Global styles.
