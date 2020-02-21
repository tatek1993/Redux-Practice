// 1
import React from 'react';
import PlayerCard from './PlayerCard';
import{ connect } from 'react-redux';

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
const mapStateToProps = (state) => {
    return {
        players: state.players,
        isFetching: state. isFetching,
        errors: state.errors
    }
}

export defaultconnect(
    mapStateToProps,
    {}
    )(PlayerList);