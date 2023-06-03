import getBooks from "../data/data";
import { Link } from "react-router-dom";

const Books = () => {
    const books = getBooks();
  
    return (
      <div className="rounded py-4 flex-column w-25 mt-3 d-flex mx-5 bg-info bg-opacity-25">
        <nav className="d-flex flex-column">
          <input className="mb-4 mx-5" type="text" placeholder="Search Book" />
          {books.map((book) => (
            <Link
              to={`/books/${book.number}`}
              key={book.number}
              className=" mt-2 mx-2"
            >
              {book.name}
            </Link>
          ))}
        </nav>
      </div>
    );
  };
  
  export default Books;