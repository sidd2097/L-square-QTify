import React from "react";
import { Chip, Tooltip } from "@mui/material";
import styles from "./Card.module.css";



// function Card({ data, type}) {
//   const getCard = (type) => {
//     switch (type) {
//       case "album": {
//         const { image, follows, title, slug, songs} = data;
//         return (
//           <Tooltip title={`${songs.length} songs`} placement="top" arrow>
//       <div className={styles.wrapper}>
//         <div className={styles.card}>
//           <img src={image} alt={title} className={styles.image} />
//           <div className={styles.banner}>
//             <Chip label={`${follows} Follows`} className={styles.chip} />
//           </div>
//         </div>
//         <div className={styles.albumName}>
//           <p>{title}</p>
//         </div>
//       </div>
//     </Tooltip>
//         )
//       }
//       case "song": {
//         const { image, likes, title } = data;
//         return (
//           <div className={styles.wrapper}>
//           <div className={styles.card}>
//             <img src={image} alt="song" className={styles.image} />
//             <div className={styles.banner}>
//               <div className={styles.pill}>
//                 <p>{likes} Likes</p>
//               </div>
//             </div>
//           </div>
//           <div className={styles.albumName}>
//             <p>{title}</p>
//           </div>
//         </div>
//         )
//       }
//       default:
//         return <></>;
//     }
//   }
//   return getCard(type);
// }

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


