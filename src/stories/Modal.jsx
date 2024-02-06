import React from "react";
import { useState, useEffect } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import { Button } from "./Button";
import { Ticket } from "./Ticket";
import Confetti from "react-confetti";

import "./modal.css";

export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const { width, height } = useWindowSize();

  return (
    <div className={showHideClassName}>
      <Confetti width={width} height={height} recycle={true} />
      <section className="modal-main">
        {children}
        <Button
          size="small"
          primary="true"
          onClick={handleClose}
          label="Close"
        />
      </section>
    </div>
  );
};
