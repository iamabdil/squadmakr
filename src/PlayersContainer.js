import { findAllByDisplayValue } from "@testing-library/react";
import React, { useState } from "react";
import ContainerTemplate from "./ContainerTemplate";
import FormPlayerTemplate from "./FormPlayerTemplate";

function SetupContainer() {
  const [players, setPlayers] = useState([{ name: "abdil", score: 1 }]);

  function handlePlayerChange(value, playerNumber) {
    // update the player
    console.log(value, playerNumber);

    var newPlayers = JSON.parse(JSON.stringify(players));
    newPlayers[playerNumber - 1]["name"] = value;
    setPlayers(newPlayers);
    console.log(newPlayers);
  }

  function handleScoreChange(value, playerNumber) {
    // update the player
    console.log(value, playerNumber);

    var newPlayers = JSON.parse(JSON.stringify(players));
    newPlayers[playerNumber - 1]["score"] = value;
    setPlayers(newPlayers);
    console.log(newPlayers);
  }

  function addNewPlayer() {
    var newPlayers = JSON.parse(JSON.stringify(players));
    newPlayers.push({ name: "", score: 0 });
    setPlayers(newPlayers);
    console.log(newPlayers);
  }

  return (
    <div className="input-players">
      <h1>Enter Players</h1>
      <ContainerTemplate>
        {players.map((player, index) => {
          console.log("player =", player);
          return (
            <FormPlayerTemplate
              key={index}
              player_number={index + 1}
              player={player}
              handlePlayerChange={handlePlayerChange}
              handleScoreChange={handleScoreChange}
            />
          );
        })}

        <div>
          <button onClick={() => addNewPlayer()} className="add-player-btn">
            Add Player
          </button>
        </div>
      </ContainerTemplate>
      <div className="field">
        <input type="submit" name="submit" value="Create Teams" />
      </div>
    </div>
  );
}

export default SetupContainer;
