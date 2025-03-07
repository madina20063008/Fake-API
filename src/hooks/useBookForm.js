import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useBookForm = (initialValues, bookId = null) => {
  const [formData, setFormData] = useState(initialValues);
  const navigate = useNavigate();

  useEffect(() => {
    if (bookId) {
      axios.get(`http://localhost:5000/books/${bookId}`).then((res) => {
        setFormData(res.data);
      });
    }
  }, [bookId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookId) {
      axios.put(`http://localhost:5000/books/${bookId}`, formData).then(() => navigate("/"));
    } else {
      axios.post("http://localhost:5000/books", formData).then(() => navigate("/"));
    }
  };

  return { formData, handleChange, handleSubmit };
};

export default useBookForm;
