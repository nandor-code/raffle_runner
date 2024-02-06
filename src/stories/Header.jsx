import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import "./header.css";

export const Header = ({ csvLoaded, onClearCSV, onUploadCSV }) => (
  <header>
    <div className="storybook-header">
      <div>
        <img
          width="32"
          height="32"
          viewBox="0 0 32 32"
          src={require("../imgs/raffle.png")}
        />
        <h1>Raffle Runner</h1>
      </div>
      <div>
        {csvLoaded ? (
          <Button size="small" onClick={onClearCSV} label="Clear CSV" />
        ) : (
          <Button size="small" onClick={onUploadCSV} label="Upload CSV" />
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  csvLoaded: PropTypes.bool.isRequired,
  onClearCSV: PropTypes.func.isRequired,
  onUploadCSV: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
