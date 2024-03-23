// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from './App';
// import HomePage from "./pages/HomePage/HomePage";
// import './index.css';
// import AlbumPage from "./pages/AlbumPage/AlbumPage";

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <App/>,
// //     children: [
// //       {
// //         path: "/",
// //         element: <HomePage/>,
// //       },
// //       {
// //         path: "/album/:albumId",
// //         element: <AlbumPage/>,
// //       },
// //     ],
// //   },
// // ]);



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
