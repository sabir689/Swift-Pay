import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";


const LiveMarket = () => {
    const navigate = useNavigate()
    const [value,setValue] = useState();
    const handleJoinRoom = useCallback(()=>{
        navigate(`/room/${value}`)
    },[navigate,value])

    return (
        <div>
            <h2 className="text-4xl mb-20">Sell Your products live</h2>
            <div className="gap-6 flex">
            <input value={value} 
            onChange={(e)=>setValue(e.target.value)} className="border-2 rounded-full p-4" type="text" placeholder="enter room code"/>
            <button  onClick={handleJoinRoom} className="btn btn-outline rounded-2xl px-8">join</button>
            </div>
        </div>
    );
};

export default LiveMarket;