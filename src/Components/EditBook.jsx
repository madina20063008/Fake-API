

import React from "react";
import { useParams } from "react-router-dom";
import useBookForm from "../hooks/useBookForm";

const EditBook = () => {
  const { id } = useParams();
  const { formData, handleChange, handleSubmit } = useBookForm(
    {
      name: "",
      surname: "",
      age: "",
      ball: "",
      date: "",
    },
    id
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h2>✏️ Kitobni Tahrirlash</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        <input type="number" name="ball" value={formData.ball} onChange={handleChange} required />
        <input type="text" name="date" value={formData.date} onChange={handleChange} required />
        <button type="submit">Yangilash</button>
      </form>
    </div>
  );
};

export default EditBook;
