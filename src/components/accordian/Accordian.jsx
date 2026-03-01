import React, { useState } from "react";
import data from "./data";

function Accordian() {
  const [selected, setSelected] = useState(false);
  const handleSingleSelection = (getCurrentId) => {
    setSelected(selected === getCurrentId ? null : getCurrentId);
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        <div className="title">
          {data && data.length > 0
            ? data.map((dataItem) => {
                return (
                  <>
                    <div
                      onClick={() => handleSingleSelection(dataItem.id)}
                      className="item"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        cursor: "pointer",
                      }}
                    >
                      <h3>{dataItem.question}</h3>
                      <span>+</span>
                    </div>

                    {selected === dataItem.id && (
                      <div className="content" style={{ textAlign: "left" }}>
                        <p> {dataItem.answer} </p>{" "}
                      </div>
                    )}
                  </>
                );
              })
            : "No data found"}
        </div>
      </div>
    </div>
  );
}

export default Accordian;
