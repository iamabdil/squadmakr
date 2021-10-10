import logo from "./logo.svg";
import "./App.css";

import Header from "./Header";
import Banner from "./Banner";
import ContainerTemplate from "./ContainerTemplate";
import SetupContainer from "./SetupContainer";
import PlayersContainer from "./PlayersContainer";
import TeamOutput from "./TeamOutput";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="rest-of-page">
        <div className="input-container">
          <SetupContainer />
          <PlayersContainer />
          <TeamOutput team_number={1} />
        </div>
      </div>
    </div>
  );
}

export default App;
