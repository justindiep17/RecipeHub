import { useState } from "react";
import Dropdown from "./Dropdown";

function NavbarItem({ title, highlighted, contents }) {
  const [dropdownActive, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <li
      className="link-container"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={
          highlighted ? "highlight-oval highlighted" : "highlight-oval"
        }
      >
        <button className="link-btn">{`${title}`}</button>
      </div>
      {dropdownActive && <Dropdown contents={contents} />}
    </li>
  );
}

export default NavbarItem;
