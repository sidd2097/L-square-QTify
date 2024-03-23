import React from 'react';
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";
import SearchBar from '../SearchBar/SearchBar';
import FeedbackButton from '../FeedbackButton/FeedbackButton';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo/>
      <SearchBar />
      <FeedbackButton buttonText="Give Feedback" />
    </div>
  );
};

export default Navbar;