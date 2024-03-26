// import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// import styles from "./Section.module.css"; 
// // import {fetchTopAlbums} from "../../api/api"

// const Section = ({ title, fetchAlbums }) => {
//   const [albums, setAlbums] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchAlbums(); // Fetch albums data using the provided function
//       setAlbums(data);
//     };

//     fetchData();
//   }, [fetchAlbums]);

//   return (
//     <div className={styles.section}>
//       <div className={styles.header}>
//         <h2>{title}</h2>
//         <button>Collpase</button>
//       </div>
//       <div className={styles.grid}>
//         {albums.map(album => (
//           <Card key={album.id} album={album} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Section;


import React, { useState, useEffect } from 'react';
import Carousel from '../Carousel/Carousel'; // Import the Carousel component
import styles from './Section.module.css';
import Card from '../Card/Card'; 

const Section = ({ title, fetchAlbums }) => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(true); // Start collapsed by default

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAlbums();
      setAlbums(data);
    };

    fetchData();
  }, [fetchAlbums]);
  

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button onClick={toggleCollapse}>
          {collapsed ? 'Show All' : 'Collapse'}
        </button>
      </div>
      {collapsed ? (
        <div >
          <Carousel albums={albums} />
        </div>
      ) : (
        <div className={styles.grid}>
          {albums.map(album => (
            <Card key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;

