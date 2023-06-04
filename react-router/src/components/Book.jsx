import { useParams } from "react-router-dom";
import {getBook} from "../data/data";

const Book = () => {
    const params = useParams();
    const book = getBook(parseInt(params.bookId));
    if(book){
        return(
            <main className=" rounded-pill bg-info bg-opacity-25 w-50 mx-auto mt-2 mb-2">
                <h3 className="pt-4">Total Price : {`${book.amount} Tooman`}</h3>
                <p className="mt-2">
                    {book.name}
                </p>
                <p className="mt-2">
                    Date : {book.due}
                </p>
                <p className="btn">
                    <button className="btn btn-dark btn-outline-info">Delete the book</button>
                </p>
            </main>
        )
    }else {
        return (
        <main className=" rounded-pill bg-info bg-opacity-25 w-50 py-5 mx-auto my-auto">
            <h3>The book not found!</h3>
        </main>
        )
    }

}

export default Book;