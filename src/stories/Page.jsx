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

function GenerateArray(count) {
  var arr = [];
  for (var i = 0; i < count; i++) {
    arr.push(i);
  }
  return arr;
}

const handleLoadCSV = (data, fileInfo) => {
  console.log(data, fileInfo);
};

const onSelectWinner = (csv) => {
  console.log("ok selecting!");
  var expandedCsv = [];

  csv.map((entry, idx) => {
    GenerateArray(entry.number_of_tickets).map((i) => {
      expandedCsv.push({ entry: entry, id: idx });
    });
  });

  console.log(expandedCsv);

  var randomWinner = Math.floor((Math.random() * 10000) % expandedCsv.length);

  var winnerEntry = expandedCsv[randomWinner];
  console.log(winnerEntry, randomWinner);

  return csv.filter((entry, idx) => idx != winnerEntry.id);
};

export const Page = () => {
  const [csv, setCSV] = useState([]);
  const [csvLoaded, setCSVLoaded] = useState(false);

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
      <br />
      {csvLoaded ? (
        <>
          <Button
            size="large"
            onClick={() => setCSV(onSelectWinner(csv))}
            label="Select A Winner!"
          />
          <br />
          <br />
          <br />
          Raffle Participants:
          <EntrantList entrantArray={csv} />
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
