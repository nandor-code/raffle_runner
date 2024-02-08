import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import LazyLoad, { forceCheck } from "react-lazyload";
import "./ticket.css";

export const Ticket = ({ label, superLabel, subLabel, animate, ...props }) => {
  const WrapperTag = animate == "true" ? "LazyLoad" : "div";

  return (
    <WrapperTag
      height="100px"
      width="320px"
      offset="100px"
      className="ticket"
      style={
        animate == "true"
          ? {}
          : {
              transform: "rotate(16deg) translateY(0%) translateZ(0)",
              transformOrigin: "50% 50%",
              marginTop: "5%",
              marginLeft: "5%",
              marginBottom: "5%",
            }
      }
    >
      Jog-A-Thon Raffle Ticket
      <div data-number={subLabel} className="ticket__number">
        {" "}
        {label}{" "}
      </div>
      {superLabel ? "(" + superLabel + ")" : ""}
    </WrapperTag>
  );
};

Ticket.propTypes = {
  label: PropTypes.string.isRequired,
};

Ticket.defaultProps = {
  label: "First Last",
  subLabel: "1",
};

export default Ticket;
