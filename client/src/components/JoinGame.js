import React,{useState} from 'react';
import socket from '../socketConfig';

const JoinGame = props =>{
    const [userInput,setuserInput]= useState({game_id:"",nickName:""});
    const onChange = e=>{
        setuserInput({...userInput,[e.target.name]:e.target.value});
    }
    const onSubmit = e =>{
        e.preventDefault();
        console.log(userInput.nickName); 
        socket.emit('join-game',userInput);
    }

    return(
        <div className="row">
            <div className="col-sm"></div>
            <div className="col-sm-8">
                <h1 className="text-center">Join Game</h1>
                <form onSubmit={onSubmit}>
                     <div className="form-group">
                    <label htmlFor="nickName">Enter Game ID</label>
                     <input
                            type="text"
                            name="gameID"
                            value={userInput.gameID}
                            onChange={onChange}
                            placeholder="Enter Game ID"
                            className="form-control"
                    />    
                    <label htmlFor="nickName">Enter Nick Name</label>
                     <input
                            type="text"
                            name="nickName"
                            value={userInput.nickName}
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
    )
}

export default JoinGame;