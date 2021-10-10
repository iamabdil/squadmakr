import React from "react";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-desc">
        <div>
          <h1>Create teams quickly</h1>
          <p>
            Save time and automate team selections! <br /> Do you have regular
            5-aside football sessions? <br />
            Or maybe you need to make a team at work. <br /> Use SquadMakr.
          </p>
        </div>
      </div>
      <div className="banner-img">
        <img src={"football1.jpeg"} />
      </div>
    </div>
  );
}

export default Banner;
