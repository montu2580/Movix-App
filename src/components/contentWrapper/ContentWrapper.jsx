import React from "react";

import "./contentwrapper.scss";
//IS COMPONENT KO USE KRKE HUM CHIZO KO CENTER LAHENGEE
// REPETATIVE CODE NA HO SO WE CREATE SEPRATE COMPONENTS 
const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;
