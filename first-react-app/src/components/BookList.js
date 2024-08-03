import Book from "./Book.js";
import React from "react";
import "../css/bookList.css";


const BookList = () => {
    return (

      <div className="bookLists" >
        <h1>My Book List </h1>
        <Book/>
        <Book/>  
        <Book/>  
        
  <button className="submitBtn"> Submit</button>
      </div>


    )
}

export default BookList;
