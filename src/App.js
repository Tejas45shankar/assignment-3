import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Display from "./components/display";
import Counter from "./components/counter";
import "./App.css";
import ListColors from './components/colours';
import BookStore from './components/book/books-class-component/bookstore';
import BookStoreFunction from './components/book/books-function-component/bookStoreFunction';
import Header from './components/Header';
import BookAddFunction from './components/book/books-function-component/bookAddFunction';
import BookViewFunction from './components/book/books-function-component/bookViewFunction';

import BookStoreHttpFunction from './components/book/books-function-http-component/bookStoreHttpFunction';
import BookViewHttpFunction from './components/book/books-function-http-component/bookViewHttpFunction';
import BookAddHttpFunction from './components/book/books-function-http-component/bookAddHttpFunction';


function App() {
  return (
    // <div>
    //   <h2>App Component</h2>
    //   <Display></Display>
    // </div>

    // <React.Fragment>
    //   <h2>App Component</h2>
    //   {/* <Display></Display> */}
    //   {/* <Counter></Counter> */}
    //   {/* <ListColors></ListColors> */}
    //   {/* <BookStore></BookStore> */}
    //   <BookStoreFunction></BookStoreFunction>
    // </React.Fragment>


    <div>  
      <Header></Header>
      <Routes>
        <Route path="/" element={<Display/>}></Route>
        <Route path="counter" element={<Counter/>}></Route>
        <Route path="list-colors" element={<ListColors/>}></Route>
       
        <Route path="book-store-class" element={<BookStore/>}></Route>

        <Route path="book-store-function" element={<BookStoreFunction/>}>
          <Route path="book-view-function/:bookId" element={<BookViewFunction/>}></Route>
        </Route>
        <Route path="book-add-function" element={<BookAddFunction/>}></Route>

        <Route path="book-store-http-function" element={<BookStoreHttpFunction/>}>
          <Route path="book-view-http-function/:bookId" element={<BookViewHttpFunction/>}></Route>
        </Route>
        <Route path="book-add-http-function" element={<BookAddHttpFunction/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;