import {getBooks} from "../data/data";
import { Link , Outlet } from "react-router-dom";

const Books = () => {
    const books = getBooks();
  
    return (
      <div className="d-flex rounded py-4 w-75 mt-3 mx-auto bg-info bg-opacity-25">
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
        <Outlet/>
      </div>
    );
  };
  
  export default Books;