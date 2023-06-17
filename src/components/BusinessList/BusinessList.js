import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

const BusinessList = ({ business }) => {
  return (
    <div className={styles.BusinessList}>
      {business.map((business) => {
        return <Business key={business.id} business={business} />;
      })}
    </div>
  );
};

export default BusinessList;
