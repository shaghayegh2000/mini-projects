import { useParams } from "react-router-dom";
import {getBook} from "../data/data";

const Book = () => {
    const params = useParams();
    const book = getBook(parseInt(params.bookId));
    return(
        <div>
            <p>TheBookId : {book.name}</p>
        </div>
    )
}

export default Book;