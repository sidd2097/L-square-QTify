import React from "react";
import { Chip, Tooltip } from "@mui/material";
import styles from "./Card.module.css";

const Card = ({ album }) => {
  const songsCount = album && album.songs ? album.songs.length : 0;
  return (
    <Tooltip title={`${songsCount} songs`} placement="top" arrow>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src={album.image} alt={album.title} className={styles.image} />
          <div className={styles.banner}>
            <Chip label={`${album.follows} Follows`} className={styles.chip} />
          </div>
        </div>
        <div className={styles.albumName}>
          <p>{album.title}</p>
        </div>
      </div>
    </Tooltip>
  );
};

export default Card;
