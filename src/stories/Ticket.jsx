import React from "react";
import PropTypes from "prop-types";
import "./ticket.css";

/**
 * Primary UI component for user interaction
 */
export const Ticket = ({ label, subLabel, ...props }) => {
  return (
    <div className="ticket" {...props}>
      <div className="top left"></div>
      <div className="top right"></div>
      <div className="bottom left"></div>
      <div className="bottom right"></div>
      <div className="ticket_border--dotted">
        <div className="ticket__text">
          Raffle Ticket<div className="ticket__number"> {label} </div>
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
