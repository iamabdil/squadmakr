import React, { useState } from "react";
import ContainerTemplate from "./ContainerTemplate";

function SetupContainer() {
  const [numberOfTeams, setNumberOfTeams] = useState(0);
  const [isScoreIncluded, setIsScoreIncluded] = useState(false);

  function getNumberofTeams(e) {
    const { value } = e.target;
    setNumberOfTeams(value);
  }

  function getIsScoreIncluded(e) {
    const { value } = e.target;
    setIsScoreIncluded((prevState) => !prevState);
  }

  console.log(numberOfTeams);
  console.log(isScoreIncluded);

  return (
    <div className="input-setup">
      <h1>Setup</h1>
      <ContainerTemplate>
        <form id="setup-input">
          <div className="field">
            <label htmlFor="email">Number of teams</label>
            <input onChange={getNumberofTeams} type="number" name="email" />
          </div>
          <div className="field field-checkbox">
            <label for="checkbox">
              <input
                onChange={getIsScoreIncluded}
                type="checkbox"
                name="checkbox"
              />{" "}
              Score players?
            </label>
          </div>
        </form>
      </ContainerTemplate>
    </div>
  );
}

export default SetupContainer;
