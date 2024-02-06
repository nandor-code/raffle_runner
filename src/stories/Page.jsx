import React from "react";
import { useState, useEffect } from "react";
import CSVReader from "react-csv-reader";
import { Header } from "./Header";
import { EntrantList } from "./EntrantList";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { Ticket } from "./Ticket";

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

  var randomWinner = Math.floor((Math.random() * 10000) % expandedCsv.length);

  var winnerEntry = expandedCsv[randomWinner];

  return {
    newCSV: csv.filter((_, idx) => idx != winnerEntry.id),
    winnerEntry: winnerEntry,
  };
};

const blankWinner = {
  entry: { name: "NoName", number_of_tickets: 0 },
};

export const Page = () => {
  const [csv, setCSV] = useState([]);
  const [winnerInfo, setWinnerInfo] = useState(blankWinner);
  const [showWinner, setShowWinner] = useState(false);
  const [csvLoaded, setCSVLoaded] = useState(false);

  function selectWinner() {
    var winnerData = onSelectWinner(csv);
    setCSV(winnerData.newCSV);
    setWinnerInfo(winnerData.winnerEntry);
    setShowWinner(true);
  }

  function clearWinner() {
    setWinnerInfo(blankWinner);
    setShowWinner(false);
  }

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
            onClick={selectWinner}
            label="Select Next Winner!"
          />
          <br />
          <br />
          <br />
          Raffle Participants:
          <EntrantList entrantArray={csv} />
          <Modal handleClose={clearWinner} show={showWinner}>
            <h1 className="text-center animate__animated animate__tada">
              Congratulations! 🎉
            </h1>
            <div key="tickets" className="tickets">
              <Ticket
                animate="false"
                label={winnerInfo.entry.name}
                superLabel="Teacher Name"
                subLabel={String(winnerInfo.entry.number_of_tickets)}
              />
            </div>
          </Modal>
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
