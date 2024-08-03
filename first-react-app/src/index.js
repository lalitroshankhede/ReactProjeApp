import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.js";
import BookList from "./components/BookList.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <BookList/>
 
  </React.StrictMode>
);




 