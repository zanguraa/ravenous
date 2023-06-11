import React from "react";
import "./BusinessList.css";
import Business from "./Business";

const BusinessList = () => {
  return (
    <div>
      {Business.map((business) => {
        return <Business business={business} />;
      })}
    </div>
  );
};

export default BusinessList;
