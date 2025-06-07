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
<ul data-start="1211" data-end="1647">
<li data-start="1211" data-end="1293">
<p data-start="1213" data-end="1293"><code data-start="1213" data-end="1237">src/pages/ColorApp.jsx</code> — Main component managing color fetch, palette, and UI.</p>
</li>
<li data-start="1294" data-end="1371">
<p data-start="1296" data-end="1371"><code data-start="1296" data-end="1326">src/components/ColorGrid.jsx</code> — Displays fetched colors with Save buttons.</p>
</li>
<li data-start="1372" data-end="1452">
<p data-start="1374" data-end="1452"><code data-start="1374" data-end="1402">src/components/Palette.jsx</code> — Shows saved palette colors with Remove buttons.</p>
</li>
<li data-start="1453" data-end="1525">
<p data-start="1455" data-end="1525"><code data-start="1455" data-end="1474">src/api/client.js</code> — Axios instance with authentication interceptors.</p>
</li>
<li data-start="1526" data-end="1612">
<p data-start="1528" data-end="1612"><code data-start="1528" data-end="1550">src/utils/storage.js</code> — Helper functions to save/load palette to/from localStorage.</p>
</li>
<li data-start="1613" data-end="1647">
<p data-start="1615" data-end="1647"><code data-start="1615" data-end="1630">src/index.css</code> — Global styles.</p>
</li>
</ul>
