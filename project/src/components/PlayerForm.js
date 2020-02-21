// 1
import React from 'react';
import { connect } from 'react-redux';

// 2
export const PlayerForm = () => {
    // 2.1 
    return(
        <div>
            <h1>Hello from the PlayerForm component!!</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        players: state.players,
        error: state.error
    }
}
// 3
export default connect(
    mapStateToProps,
    {}
)(PlayerForm);