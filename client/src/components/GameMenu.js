
import { useNavigate } from 'react-router-dom';

const GameMenu = (props) => {
  const navigate = useNavigate();
console.log("GameMenu is rendering");

  return (
    <div className="text-center">
      <h1>Welcome to Type Racer</h1>
      <button
        type="button"
        className="btn btn-primary btn-lg me-3"
        onClick={() => navigate('/game/create')}
      >
        Create Game
      </button>
      <button
        type="button"
        className="btn btn-primary btn-lg me-3 "
        onClick={() => navigate('/game/join')}
      >
        Join Game
      </button>
    </div>
  );
};

export default GameMenu;
