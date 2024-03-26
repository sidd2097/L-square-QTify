


import React, { useState, useEffect } from 'react';
import Carousel from '../Carousel/Carousel'; // Import the Carousel component
import styles from './Section.module.css';
import Card from '../Card/Card'; 
import { Tabs, Tab } from '@mui/material'

const Section = ({ title, fetchAlbums, fetchSongs, fetchFilters }) => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(true); // Start collapsed by default
  const [songs, setSongs] = useState([]);
  const [filters, setFilters] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');

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

  useEffect(() => {
    const Data = async () => {
      const genreData = await fetchFilters();
      console.log(genreData)
      if (Array.isArray(genreData)) {
        setFilters(['All', ...genreData]);
      } else {
        console.error('Genre data is not an array:', genreData);
        // Handle the non-array response accordingly
      }
    };

    Data();
  }, [fetchFilters]);

  useEffect(() => {
    const fetchData = async () => {
      const songsData = await fetchSongs(selectedFilter.toLowerCase());
      setSongs(songsData);
    };

    fetchData();
  }, [selectedFilter, fetchSongs]);

  const handleTabChange = (event, newValue) => {
    setSelectedFilter(newValue);
  };
  

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button onClick={toggleCollapse}>
          {collapsed ? 'Show All' : 'Collapse'}
        </button>
      </div>
      <Tabs value={selectedFilter} onChange={handleTabChange}>
      {filters.map(genre => (
        <Tab key={genre} label={genre} value={genre} />
      ))}
    </Tabs>
      {collapsed ? (
        <>
        
        <div >
          <Carousel albums={albums} />
        </div>
        {title === 'Songs' && (
          <div>
            <Carousel albums={songs} />
          </div>
        )}
        </>
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

