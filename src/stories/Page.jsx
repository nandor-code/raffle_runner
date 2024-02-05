import React from "react";
import { useState, useEffect } from "react";
import CSVReader from "react-csv-reader";
import { Header } from "./Header";
import { EntrantList } from "./EntrantList";
import { Button } from "./Button";

import "./page.css";

const papaparseOptions = {
  delimited: "", //auto detect
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
};

const handleLoadCSV = (data, fileInfo) => {
  console.log(data, fileInfo);
};

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

const onSelectWinner = () => {
  console.log("ok selecting!");
};

export const Page = () => {
  const [csv, setCSV] = useState([]);
  const [csvLoaded, setCSVLoaded] = useState(false);
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCSV((prevCSV) => shuffle(prevCSV));
      setIteration((prevIter) => prevIter + 1);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Header
        csvLoaded={csvLoaded}
        onUploadCSV={() => console.log("Upload Requested")}
        onClearCSV={() => {
          setCSV([]);
          setCSVLoaded(false);
        }}
      />
      <Button size="large" onClick={onSelectWinner} label="Select A Winner!" />
      <br />
      {csvLoaded ? (
        <>
          Raffle Participants:
          <EntrantList iter={iteration} entrantArray={csv} />
        </>
      ) : (
        <CSVReader
          cssClass="react-csv-input"
          label="Select CSV for Raffle"
          onFileLoaded={(data, fileInfo) => {
            handleLoadCSV(data, fileInfo);
            setCSV(data);
            setCSVLoaded(true);
          }}
          parserOptions={papaparseOptions}
        />
      )}
    </>
  );
};
