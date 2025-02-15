import React, { Children, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { HiCalendar, HiMinus, HiPlus, HiSearch } from "react-icons/hi";

function Header() {
  const [destination, setDestination] = useState("");
  const [OpenOption, setOpenOption] = useState(false);

  const [options, setOptions] = useState({
    adult: 1,
    Children: 2,
    room: 1,
  });
  return (
    <div className="header">
      <div className="headerSearch">
        <div className="headerSearchItem">
          <MdLocationOn className="headerIcon locationIcon" />
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            placeholder="where to go? "
            className="headerSearchItem"
            name="destination"
            id="destination"
          />
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <HiCalendar className="headerIcon dateIcon" />
          <div className="dateDropDown"></div>
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <div id="optionDropDown" onClick={() => setOpenOption(!OpenOption)}>
            1.adult
          </div>
          {OpenOption && <GuestOptionList options={options} />}
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <button className="headerSearchBtn">
            <HiSearch className="headerIcon" />
          </button>
          <span className="seperator"></span>
        </div>
      </div>
    </div>
  );
}

export default Header;

function GuestOptionList() {
  return (
    <div className="guestOptions">
      <OptionItem />
    </div>
  );
}

function OptionItem() {
  return (
    <div className="guestOptionItem">
      <span className="optionText">Adult</span>
      <div className="optionCounter">
        <button className="optionCounterBtn">
          <HiMinus className="icon" />
        </button>
        <span className="optionCounterNumber">Adult</span>
        <button className="optionCounterBtn">
          <HiPlus className="icon" />
        </button>
      </div>
    </div>
  );
}
