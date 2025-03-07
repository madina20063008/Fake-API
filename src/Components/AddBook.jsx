

import React from "react";
import useBookForm from "../hooks/useBookForm";

const AddBook = () => {
  const { formData, handleChange, handleSubmit } = useBookForm({
    name: "",
    surname: "",
    age: "",
    ball: "",
    date: "",
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>📖 Yangi Kitob Qo‘shish</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Ism" value={formData.name} onChange={handleChange} required />
        <input type="text" name="surname" placeholder="Familiya" value={formData.surname} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Yosh" value={formData.age} onChange={handleChange} required />
        <input type="number" name="ball" placeholder="Ball" value={formData.ball} onChange={handleChange} required />
        <input type="text" name="date" placeholder="Sana" value={formData.date} onChange={handleChange} required />
        <button type="submit">Qo‘shish</button>
      </form>
    </div>
  );
};

export default AddBook;
