import React, { useState } from "react";

function FormPlayerTemplate(props) {
  return (
    <form id="setup-input">
      <div className="player-input">
        <div className="field">
          <label htmlFor={`name${props.player_number}`}>
            Player {props.player_number}
          </label>
          <input
            type="text"
            name={`name${props.player_number}`}
            placeholder="Name"
            value={props.player.name}
            onChange={(e) =>
              props.handlePlayerChange(e.target.value, props.player_number)
            }
          />
        </div>
        <div className="field field-score">
          <label htmlFor={`name${props.score}`}>
            Score {props.player_number}
          </label>
          <input
            type="number"
            name={`name${props.player.score}`}
            placeholder="Score"
            value={props.player.score}
            onChange={(e) =>
              props.handleScoreChange(e.target.value, props.player_number)
            }
          />
        </div>
      </div>
    </form>
  );
}

export default FormPlayerTemplate;
