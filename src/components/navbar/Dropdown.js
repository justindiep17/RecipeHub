import { Link } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";

function Dropdown({ contents }) {
  return (
    <div className="dropdown-container">
      <div className="caret"></div>
      <div className="dropdown-content">
        {contents.map((c) => {
          return (
            <ul className="dropdown-column">
              {c.map((word) => {
                return <Link className="dropdown-link">{`${word}`}</Link>;
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
