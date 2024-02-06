import React from "react";
import PropTypes from "prop-types";
import Ticket from "./Ticket";

export const EntrantList = ({ entrantArray }) => {
  function GenerateArray(count) {
    var arr = [];
    for (var i = 0; i < count; i++) {
      arr.push(i);
    }
    return arr;
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  function GetSubLabel(cur, total) {
    var ret = "(";
    ret += String(cur);
    ret += "/";
    ret += String(total);
    ret += ")";
    return ret;
  }

  /*
  const [randomizedCsv, setRandomizedCsv] = useState(entrantArray);

  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    /*const interval = setInterval(() => {
      setRandomizedCsv((prevCSV) => shuffle(prevCSV));
      setCycle((prev) => setCycle(prev + 1));
    }, 500);

    setRandomizedCsv(entrantArray);

    return () => {
      //clearInterval(interval);
    };
  }, []);
*/
  return (
    <div key="tickets" className="tickets">
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

export default EntrantList;
