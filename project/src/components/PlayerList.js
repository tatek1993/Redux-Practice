// 1
import React from 'react';
import PlayerCard from './PlayerCard';

// 2
export const PlayerList = () => {
    // 2.1 
    return(
        <div>
            <h1>Hello from the PlayerList component!!</h1>
            <PlayerCard />
        </div>
    )
}

// 3
export default PlayerList;