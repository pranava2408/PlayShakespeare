import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import socket from '../socketConfig';

const CreateGame = () => {
  const [nickName, setNickName] = useState('');
  const navigate = useNavigate();

  const onChange = (e) => {
    setNickName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with nickname:', nickName);
    socket.emit('create-game', nickName);
  };

  useEffect(() => {
    socket.on('updateGame', (game) => {
      console.log('Received game from server:', game); 
      if (game._id) {
        navigate(`/game/${game._id}`);
      }
    });

    return () => {
      socket.off('updateGame');
    };
  }, [navigate]);

  return (
    <div className="row">
      <div className="col-sm"></div>
      <div className="col-sm-8">
        <h1 className="text-center">Create Game</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="nickName">Enter Nick Name</label>
            <input
              type="text"
              name="nickName"
              value={nickName}
              onChange={onChange}
              placeholder="Enter Nick Name"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGame;
