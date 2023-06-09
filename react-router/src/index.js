import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import About from './components/About';
import Books from './components/Books';
import Book from './components/Book';

// //bootstrap
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '/node_modules/bootstrap/dist/js/bootstrap.min.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="/books" element={<Books/>}>
            <Route index element={
              <main>
                <p>Choose your book</p>
              </main>
            }></Route>
          <Route path=':bookId' element={<Book/>}></Route>
          </Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path='*' element={
          <div className='d-flex justify-content-center'>
            <main className='d-flex position-absolute top-50'>
              <h2>Page Not Found</h2>
            </main>
          </div>
        }></Route>
        </Route>
        {/* <Route path="/books" element={<Books/>}></Route>
        <Route path="/about" element={<About/>}></Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


