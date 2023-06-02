import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Contacts from './components/contact/Contacts';

const App = () => {

  const [contacts , setContact] = useState([]);
  return (
    <div className="App">
      <Navbar/>
      <Contacts/>
    </div>
  );
}

export default App;
