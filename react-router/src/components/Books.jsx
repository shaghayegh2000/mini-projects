import {getBooks} from "../data/data";
import { NavLink , Outlet , useSearchParams } from "react-router-dom";

const Books = () => {

  const [searchPara , setSearchPara] = useSearchParams();

    const books = getBooks();
  
    return (
      <div className="d-flex rounded py-4 w-75 mt-3 mx-auto bg-info bg-opacity-25">
        <nav className="d-flex flex-column">
          <input onChange={event => {
            let filter = event.target.value;
            if (filter) {
              setSearchPara({filter : filter})
            }else {
              setSearchPara({});
            }
          }} value={searchPara.get('filter') || ""} className="mb-4 mx-5" type="text" placeholder="Search Book" />
          {books.filter((book)=>{
            let filter = searchPara.get('filter');
            if(!filter) return true;
            let name = book.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          books.map((book) => (
            <NavLink style={({isActive}) => {
              return {
                color: isActive ? "red" : "",
              }
            }}
              to={`/books/${book.number}`}
              key={book.number}
              className=" mt-2 mx-2"
            >
              {book.name}
            </NavLink>
          ))}
        </nav>
        <Outlet/>
      </div>
    );
  };
  
  export default Books;