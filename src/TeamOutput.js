import React from "react";
import ContainerTemplate from "./ContainerTemplate";

function TeamOutput(props) {
  return (
    <div className="input-players">
      <h1>Teams</h1>
      <ContainerTemplate>
        <h2>Team {props.team_number}</h2>
      </ContainerTemplate>
    </div>
  );
}

export default TeamOutput;
