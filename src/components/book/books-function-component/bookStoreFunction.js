import React from 'react'
import { useState } from 'react';
import BookItemFunction from './bookItemFunction';
import { Outlet, useNavigate } from 'react-router-dom';
function BookStoreFunction() {
   
    const navigate= useNavigate();
    const [allBooks,setAllBooks]= useState( [
            {
                "id": 101,
                "bookTitle": "Harry Potter and the Order Of Phoenix",
                "bookAuthor": "J.K.Rowling",
                "bookGenre": "Fiction",
                "bookCost": "200",
                "bookImageUrl": "https://images.unsplash.com/photo-1609866138210-84bb689f3c61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=469&q=80"
              },
              {
                "id": 102,
                "bookTitle": "Harry Potter and the Sorcerers' Stone",
                "bookAuthor": "J.K.Rowling",
                "bookGenre": "Fiction",
                "bookCost": "300",
                "bookImageUrl": "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              }
        ] 
    );
    const [title,setTitle]= useState('List of Books');

    const renderAllBooks = () => {
        return allBooks.map((eachBook) => (
          

            <BookItemFunction  key={eachBook.id} data={eachBook} onDelete={()=>handleDelete(eachBook)} onView={()=>handleView(eachBook)}></BookItemFunction>
        ))
       
    }
   const  handleDelete = (eachBook) => {
        console.log("parent delete call");  
        console.log(eachBook.id);
      let allBook = allBooks;
        allBook = allBook.filter((ebook)=> (ebook.id!==eachBook.id));
        setAllBooks(allBook)
  }

   const handleView =(eachBook) => {
    navigate(`book-view-function/${eachBook.id}`);
   }

  
  const handleAddNewBook = () => {
   
    navigate('/book-add-function');

  }

    return (
        <div className="container m-5">
            <h2>{title}</h2>
            <Outlet></Outlet>
            <button type='button' className="btn btn-success" onClick={handleAddNewBook}>Add NEW BOOK</button>
        <table className="table table-striped">
            <thead className="bg-dark text-white">
                <tr>
                    <th>ID</th>
                    <th>IMAGE</th>
                    <th>TITLE</th>
                    <th>AUTHOR</th>
                    <th>GENRE</th>
                    <th>COST</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {renderAllBooks()}
            </tbody>
        </table>

    </div>
    );
}

export default BookStoreFunction;