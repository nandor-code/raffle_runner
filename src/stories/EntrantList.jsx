import React from "react";
import PropTypes from "prop-types";
import Ticket from "./Ticket";

export const EntrantList = ({ entrantArray, ...props }) => {
  function GenerateArray(count) {
    var arr = [];
    for (var i = 0; i < count; i++) {
      arr.push(i);
    }
    return arr;
  }
  function GetSubLabel(cur, total) {
    var ret = "(";
    ret += String(cur);
    ret += "/";
    ret += String(total);
    ret += ")";
    return ret;
  }

  return (
    <div className="tickets">
      {entrantArray.map((entry) => (
        <>
          {GenerateArray(entry.number_of_tickets).map((i) => (
            <Ticket
              label={entry.name}
              subLabel={GetSubLabel(i + 1, entry.number_of_tickets)}
              key={String(i) + entry.name}
            />
          ))}
        </>
      ))}
    </div>
  );
};

EntrantList.propTypes = {
  entrantArray: PropTypes.array,
};

EntrantList.defaultProps = {
  backgroundColor: null,
  entrantArray: [],
};
/*
import React from "react";
import PropTypes from "prop-types";
import Ticket from "./Ticket";

export const EntrantList = ({ entrantArray, ...props }) => {
  function GenerateArray(count) {
    var arr = [];
    for (var i = 0; i < count; i++) {
      arr.push(i);
    }
    return arr;
  }
  return (
    <div className="tickets">
      {entrantArray.map((entry) => ({
        console.log(GenerateArray());
    })
      }
    </div>
  );
};

EntrantList.propTypes = {
  entrantArray: PropTypes.array,
};

EntrantList.defaultProps = {
  backgroundColor: null,
  entrantArray: [],
};
*/
