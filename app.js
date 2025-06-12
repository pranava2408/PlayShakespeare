const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const QuotableAPI = require('./QuotableAPI');
const Game = require('./models/Game');

app.use(cors({ origin: 'http://localhost:3000' }));

const expressServer = app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

const socketio = require('socket.io');
const io = socketio(expressServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
  }
});

mongoose.connect('mongodb://localhost:27017/playshakespeare', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Successfully connected to database');
})
.catch((err) => {
  console.error('Connection error:', err);
});

io.on('connect', (socket) => {
  console.log('New client connected');
  socket.on('join-game',async ({gameID:_id,nickName})=>{
    try{
        let game = Game.findById(_id);
        if(game.isOpen){
          const gameID = game._id.toString();
          socket.join(gameID);
          let player = {
            socketID : socket.id,
            nickName
          }
          game.players.push(player);
          game=await game.save();
          io.to(gameID).emit('updateGame',game);
        }
    }catch(err){
      console.log(err);
    }

  });
  socket.on('create-game',async (nickName)=>{
    try{
      const quotableData = await QuotableAPI();
      let game = new Game();
      game.words = quotableData;
      let player = {
        socketID:socket.id,
        isPartyLeader:true,
        nickName
      }
      game.players.push(player);
      game = await game.save();

      const gameID = game._id.toString();
      socket.join(gameID);
      io.to(gameID).emit('updateGame',game);
    }catch(err){
      console.log(err);
    }
  });
});
