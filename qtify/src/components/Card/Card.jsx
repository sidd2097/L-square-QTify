import React from 'react';
import { Chip } from '@mui/material'; 
import styles from "./Card.module.css"; 

const Card = ({ album }) => {
  return (
    <div className={styles.card}>
      <img src={album.image} alt={album.title} className={styles.image} />
      <div className={styles.bottomSection}>
        <Chip label={`${album.follows} Follows`} className={styles.chip} />
        <h2 className={styles.albumName}>{album.title}</h2>
      </div>
    </div>
  );
};

export default Card;