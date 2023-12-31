import React from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const App = () => {
  const business = [
    {
      imageSrc:
        "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
      name: "MarginOtto Pizzeria",
      address: "1010 Paddington Way",
      city: "Bordertown",
      state: "NY",
      zipCode: "10101",
      category: "Italian",
      rating: 4.5,
      reviewCount: 90,
    },
    {
      imageSrc:
        "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
      name: "Mil Georgia",
      address: "1010 Paddington Way",
      city: "Kaspi",
      state: "SHK",
      zipCode: "10101",
      category: "Georgian",
      rating: 5.5,
      reviewCount: 190,
    },
  ];
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList business={business} />
    </div>
  );
};

export default App;
