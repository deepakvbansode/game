import React, { Component } from "react";
import FilterComponent from "./FilterComponent";
import ListComponent from "./ListComponent";

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: "FB",
      filter: "UPCOMING",
      data: []
    };
    this.changeGame = this.changeGame.bind(this);
  }

  changeGame(selectedGame) {
    // let data = this.getGameData(selectedGame);
    // this.setState({
    //   game: selectedGame,
    //   data: data
    // });
    //ajax call
    let url = "http://demo8926664.mockable.io/games-fb";
    if (selectedGame === "BB") url = "http://demo8926664.mockable.io/games-bb";
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        console.log(JSON.stringify(myJson));
        this.setState({
          game: selectedGame,
          data: myJson
        });
      });
    //set data
  }
  getGameData(game) {
    if (game === "FB") {
      return [
        {
          team1: "abc",
          team2: "pqr",
          score1: 20,
          score2: 19
        },
        {
          team1: "stu",
          team2: "zyx",
          score1: 2,
          score2: 3
        }
      ];
    } else if (game === "BB") {
      return [
        {
          team1: "MUMBAI",
          team2: "PUNE",
          score1: 20,
          score2: 19
        },
        {
          team1: "BENGLUR",
          team2: "HYD",
          score1: 2,
          score2: 3
        }
      ];
    }
    return [
      {
        team1: "India",
        team2: "Pakistan",
        score1: 300,
        score2: 250
      }
    ];
  }
  render() {
    return (
      <div>
        <FilterComponent
          game={this.state.game}
          filter={this.state.filter}
          changeGame={this.changeGame}
        />
        <ListComponent matches={this.state.data} game={this.state.game} />
      </div>
    );
  }
}

export default DashboardContainer;
