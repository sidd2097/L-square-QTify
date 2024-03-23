import React from 'react';
import searchIcon from "../../assests/Search-icon.svg";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles['search-bar']}>
      <input type="text" placeholder="Search a song of your choice" />
      <button>
        <img src={searchIcon} alt="Search Icon" /> 
      </button>
    </div>
  );
};

export default SearchBar;