import React from "react";
import { useState } from "react";

function Dropdown() {
  const list = ["C", "C++", "Java", "Python", "JavaScript"];

  const [selectedOption, setselectedOption] = useState("");

  const [optinArray, setoptionArray] = useState([]);

  const handleMouseOver = () => {
    setoptionArray(list);
  };

  const handleClick = () => {
    setoptionArray([]);
  };

  

  

  const handlOptionClick = (data) => {
    setselectedOption(data);
  };
  return (
    <>
      <div className="title">
        <h2>{selectedOption}</h2>
      </div>
      <div onClick={handleClick} className="select">
        <div className="selectedbox">
          <div onMouseOver={handleMouseOver} className="selectbtn">
            Select
          </div>

          <div className="itembox">
            {optinArray.map((data) => (
              <div className="itemboxct" onClick={() => handlOptionClick(data)}>
                {data}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
