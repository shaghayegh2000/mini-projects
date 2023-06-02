import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Contacts from './components/contact/Contacts';

const App = () => {

  const [getContacts , setContact] = useState([]);
  
  return (
    <div className="App">
      <Navbar/>
      <Contacts contacts={getContacts}/>
    </div>
  );
}

export default App;
