import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "./ticket.css";

export const Ticket = ({ label, subLabel, ...props }) => {
  const { height, width } = getWindowDimensions();
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function getNextRandomPos() {
    return {
      x: Math.floor(width * (1 - Math.random()) - 250),
      y: Math.floor(height * (1 - Math.random()) + 200),
    };
  }

  const [Rotation, setRotation] = useState(
    Math.floor((Math.random() * 1000) % 100)
  );
  const [Position, setPosition] = useState(getNextRandomPos());
  const [Destination, setDestination] = useState(getNextRandomPos());

  useEffect(() => {
    let timer = setInterval(() => {
      if (Rotation > 0) {
        setRotation((curRotation) => {
          return curRotation - 1;
        });
      }

      if (Position.x == Destination.x && Position.y == Destination.y) {
        // we have arrived.
        var newDest = getNextRandomPos();
        setDestination(newDest);
        setPosition((curPos) => {
          return { x: curPos.x + 1, y: curPos.y + 1 };
        });
      } else {
        // move closer to our target.
        setPosition((curPos) => {
          var nextX =
            curPos.x == Destination.x
              ? curPos.x
              : curPos.x < Destination.x
              ? curPos.x + 1
              : curPos.x - 1;
          var nextY =
            curPos.y == Destination.y
              ? curPos.y
              : curPos.y < Destination.y
              ? curPos.y + 1
              : curPos.y - 1;
          return {
            x: nextX,
            y: nextY,
          };
        });
      }
    }, 0);

    return () => {
      clearInterval(timer);
    };
  }, [Position]);

  const style = {
    top: Position.y,
    left: Position.x,
    animation: Rotation == 0 ? "rotation 2s infinite linear" : "",
  };

  return (
    <div className="ticket" style={style} {...props}>
      <div className="top left"></div>
      <div className="top right"></div>
      <div className="bottom left"></div>
      <div className="bottom right"></div>
      <div className="ticket_border--dotted">
        <div className="ticket__text">
          Raffle Ticket
          <div className="ticket__number"> {label} </div>
          {subLabel}
        </div>
      </div>
    </div>
  );
};

Ticket.propTypes = {
  label: PropTypes.string.isRequired,
};

Ticket.defaultProps = {
  label: "First Last",
};

export default Ticket;
