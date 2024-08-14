const BookShelf = ({ books, newBook, handleInputChange, handleSubmit }) => {
  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={newBook.genre}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={newBook.year}
          onChange={handleInputChange}
        />
        <button type="submit">Add Book</button>
      </form>
      <h2>Your Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} by {book.author} - {book.genre}, {book.year}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BookShelf;
