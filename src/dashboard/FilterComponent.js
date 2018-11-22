import React from "react";

// const FilterComponent = (props) => {

//     let bascketBallClass = props.game === 'BB' ? 'active' : '';
//     let footBallClass = props.game === 'FB' ? 'active' : '';
//     let cricketClass = props.game === 'CR' ? 'active' : '';
//     return (
//         <div>
//             <div>
//                 <button className={bascketBallClass} onClick={props.changeGame.bind(null, 'BB')}>Backet ball </button>
//                 <button className={footBallClass} onClick={props.changeGame.bind(null, 'FB')}>Foot ball </button>
//                 <button className={cricketClass} onClick={props.changeGame.bind(null, 'CR')}>Cricket </button>
//             </div>
//             <div>
//                 <button>Upcoming</button>
//                 <button>Previous</button>
//                 <button>Live </button>
//             </div>
//         </div>
//     )
// }

// export default FilterComponent;
export default class FilterComponent extends React.Component {
  componentWillUnmount() {
    console.log("will unmount");
  }
  render() {
    let bascketBallClass = this.props.game === "BB" ? "active" : "";
    let footBallClass = this.props.game === "FB" ? "active" : "";
    let cricketClass = this.props.game === "CR" ? "active" : "";
    return (
      <div>
        <div>
          <button
            className={bascketBallClass}
            onClick={this.props.changeGame.bind(null, "BB")}
          >
            Backet ball{" "}
          </button>
          <button
            className={footBallClass}
            onClick={this.props.changeGame.bind(null, "FB")}
          >
            Foot ball{" "}
          </button>
          <button
            className={cricketClass}
            onClick={this.props.changeGame.bind(null, "CR")}
          >
            Cricket{" "}
          </button>
        </div>
        <div>
          <button>Upcoming</button>
          <button>Previous</button>
          <button>Live </button>
        </div>
      </div>
    );
  }
}
