import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Card from '../Card/Card'; 
import styles from "./Section.module.css"; 
import {fetchTopAlbums} from "../../api/api"

const Section = () => {
  const [topAlbums, setTopAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const data = await fetchTopAlbums(); // Fetch top albums data
        setTopAlbums(data);
      };
  
      fetchData();
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>Top Albums</h2>
        <button>Collpase</button>
      </div>
      <div className={styles.grid}>
        {topAlbums.map(album => (
          <Card key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default Section;
