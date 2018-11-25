import React from "react";

// const ListComponent = (props) => {
//     let listOfMatches = props.matches.map((match,index) => {
//         return (
//             <div key={index}>
//                 Team1 : {match.team1} ({match.score1})<br/>
//                 Team2 : {match.team2} ({match.score2})
//             </div>
//         );
//     });
//     return (
//         <div>
//             {listOfMatches}
//         </div>
//     )
// }

export default class ListComponent extends React.Component {
  componentDidMount() {
    console.log("list did mount");
  }
  componentWillUnmount() {
    console.log("list will unmount");
  }
  componentWillReceiveProps() {
    console.log("component will recieve props called");
  }
  componentWillUpdate() {
    console.log("List conponent will update");
  }
  componentDidUpdate() {
    console.log("List conponent Did update");
  }
  shouldComponentUpdate(prevProps) {
    return prevProps.matches !== this.props.matches;
  }
  render() {
    console.log("rendering list compenent");
    let listOfMatches = this.props.matches.map((match, index) => {
      return (
        <div key={index}>
          Team1 : {match.team1} ({match.score1})<br />
          Team2 : {match.team2} ({match.score2})
        </div>
      );
    });
    return (
      <div>
        <h1>{this.props.game}</h1>
        {listOfMatches}
      </div>
    );
  }
}
