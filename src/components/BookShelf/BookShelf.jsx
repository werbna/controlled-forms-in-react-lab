const BookShelf = ({ books, newBook, handleInputChange, handleSubmit }) => {

  
  return (
    <div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
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
  </div>
  <div className="bookCardsDiv">
    {books.map((book, index) => (
      <div key={index} className="bookCard">
        <h4>{book.title}</h4>
        <p>{book.author}</p>
        <p>{book.genre}</p>
        <p>{book.year}</p>
      </div>
    ))}
  </div>
</div>
  );
};
export default BookShelf;
