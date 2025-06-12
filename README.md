🎮 Type Racer Real-Time Game
A real-time multiplayer typing game built with React, Node.js, Socket.IO, and MongoDB. Players can create or join typing games, compete against others by typing a quote as fast as possible, and track their progress live.

🚀 Features
🔥 Real-time multiplayer gameplay using Socket.IO

👥 Create or join game rooms with unique IDs

⌨️ Typing challenge using quotes from the Quotable API

📊 Live player progress updates

🗃️ MongoDB used for storing game state

🧰 Tech Stack
Frontend: React, React Router, Bootstrap

Backend: Node.js, Express

WebSocket: Socket.IO

Database: MongoDB (via Mongoose)

API: Quotable API

🛠️ Installation
Prerequisites
Node.js & npm

MongoDB running locally (or update the URI)

Clone the repository
bash
Copy
Edit
git clone https://github.com/yourusername/type-racer-game.git
cd type-racer-game
Install dependencies
Client:

bash
Copy
Edit
cd client
npm install
Server:

bash
Copy
Edit
cd server
npm install
▶️ Run the App
Start MongoDB
Make sure MongoDB is running locally:

bash
Copy
Edit
mongod
Start Backend
bash
Copy
Edit
cd server
npm start
Runs on http://localhost:3001

Start Frontend
bash
Copy
Edit
cd client
npm start
Runs on http://localhost:3000

📁 Project Structure
bash
Copy
Edit
client/           # React frontend
  └── components/ # GameMenu, CreateGame, etc.
  └── App.js

server/           # Node.js backend
  └── models/     # Mongoose Game model
  └── QuotableAPI.js
  └── app.js      # Express + Socket.IO logic
