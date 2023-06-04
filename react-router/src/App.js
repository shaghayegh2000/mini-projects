import {} from './App.css';
import { Link , Outlet } from 'react-router-dom';

const App = () => {
  
  return (
    <div className="App">
      <h2 className='mt-4'>My ReactProject</h2>
      <nav style={{borderBottom: 'solid 1px black' , paddingBottom: '4vh'}}>
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
