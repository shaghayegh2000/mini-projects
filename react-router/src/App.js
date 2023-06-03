import {} from './App.css';
import { Link , Outlet } from 'react-router-dom';

const App = () => {
  
  return (
    <div className="App">
      <h2>My ReactProject</h2>
      <nav className='mt-4' style={{borderBottom: 'solid 1px black' , paddingBottom: '4vh'}}>
        <Link to="/books">
          My Books
        </Link>
        {" "}
        <Link to="/about">
          About Us
        </Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
