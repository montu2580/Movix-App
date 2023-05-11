import React, { useState } from "react";

import "./switchtabs.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0); //INDEX PASSK KRna h
  const [left, setLeft] = useState(0); //for effect left 

  const activeTab = (tab, index) => {
    setLeft(index * 100); //SCSS M WIDTH 100PX HI FIX KI THO 100 SE *
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index); //call kr rhe 
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
