
import { useState } from 'react';
import './App.css';
import Bookshelf from './components/BookShelf/Bookshelf';

const App = () => {
  const [books, setBooks] = useState([])
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre:'',
    year:'',
  })

  const handleInputChange = (event) => {
    setFormData({})
  }

  const handleSubmit = (event) => {

  }
  return (
    <>
      <h1>My BookShelf</h1>
      <Bookshelf />
    </>
  );
};

export default App;
