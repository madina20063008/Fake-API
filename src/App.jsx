
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "./Components/BookList";
import AddBook from "./Components/AddBook";
import EditBook from "./Components/EditBook";

const App = () => {
  return (
    <Router>
      <div>
        <h1 style={{ textAlign: "center" }}>📚 Kitoblar CRUD App</h1>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

