import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
        avatar="https://randomuser.me/api/portraits/women/82.jpg"
        name="Riley Stone"
        online=""
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/men/11.jpg"
        name="Fred Harris"
        online='Online'
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/72.jpg"
        name="Marlene Carroll"
        online=""
      />
    </div>
  );
}

export default App;
