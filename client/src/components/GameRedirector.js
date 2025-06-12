import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import socket from '../socketConfig';

const GameRedirector = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState({
    _id: '',
    isOpen: false,
    players: [],
    worda: [],
  });

  useEffect(() => {
    socket.on('updateGame', (game) => {
      console.log('Received updateGame:', game);
      setGameState(game);
    });

    return () => {
      socket.off('updateGame');
    };
  }, []);

  useEffect(() => {
    if (gameState._id !== '') {
      navigate(`/game/${gameState._id}`);
    }
  }, [gameState._id, navigate]);

  return null;
};

export default GameRedirector;
