import React from "react";
import MyBook from "../img/book1.jpg";
import "../css/books.css";

const Book = () => {
  return (
    <div className="books">
      <div>
        <img src={MyBook} alt="my_book" width={250} />
      </div>

      <div className="bookDetails">
        <h2>The Harry Potter</h2>
        <p>By John Doe</p>
        <p>$100</p>
        <button className="cardBtn">Add to Card</button>
      </div>
    </div>
  );
};

export default Book;
