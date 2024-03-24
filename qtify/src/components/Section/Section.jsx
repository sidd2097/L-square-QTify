import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Card from '../Card/Card'; 
import styles from "./Section.module.css"; 
// import {fetchTopAlbums} from "../../api/api"

const Section = ({ title, fetchAlbums }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAlbums(); // Fetch albums data using the provided function
      setAlbums(data);
    };

    fetchData();
  }, [fetchAlbums]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button>Collpase</button>
      </div>
      <div className={styles.grid}>
        {albums.map(album => (
          <Card key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default Section;
