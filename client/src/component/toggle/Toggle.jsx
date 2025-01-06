import React from "react";
import "./toggle.scss";

function Toggle({ activeView, setActiveView, options }) {
  return (
    <div className="toggle">
      {options.map((option) => (
        <button
          key={option}
          className={activeView === option ? "active" : ""}
          onClick={() => setActiveView(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Toggle;
