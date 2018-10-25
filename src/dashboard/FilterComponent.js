import React from 'react';

const FilterComponent = (props) => {
    
    let bascketBallClass = props.game === 'BB' ? 'active' : '';
    let footBallClass = props.game === 'FB' ? 'active' : '';
    let cricketClass = props.game === 'CR' ? 'active' : '';
    return (
        <div>
            <div>
                <button className={bascketBallClass} onClick={props.changeGame.bind(null, 'BB')}>Backet ball </button>
                <button className={footBallClass} onClick={props.changeGame.bind(null, 'FB')}>Foot ball </button>
                <button className={cricketClass} onClick={props.changeGame.bind(null, 'CR')}>Cricket </button>
            </div>
            <div>
                <button>Upcoming</button>
                <button>Previous</button>
                <button>Live </button>
            </div>
        </div>
    )
}

export default FilterComponent;