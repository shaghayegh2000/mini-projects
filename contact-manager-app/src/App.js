import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Contacts from './components/contact/Contacts';
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';
import ViewContact from './components/contact/ViewContact';
import Contact from './components/contact/Contact';

const App = () => {

  const [loading , setLoading] = useState(false);

  const [getContacts , setContact] = useState([]);
  
  return (
    <div className="App">
      <Navbar/>
      <Contacts contacts={getContacts} loading={loading}/>
    </div>
  );
}

export default App;
