import React from 'react';

const ListComponent = (props) => {
    let listOfMatches = props.matches.map((match,index) => {
        return (
            <div key={index}>
                Team1 : {match.team1} ({match.score1})<br/>
                Team2 : {match.team2} ({match.score2})
            </div>
        );
    });
    return (
        <div>
            {listOfMatches}
        </div>
    )
}

export default ListComponent;