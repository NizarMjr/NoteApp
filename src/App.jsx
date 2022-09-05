import React, { useState } from 'react';
import Form from './components/Form/Form'
import Notes from './components/Notes/Notes'
import './App.css';
import { AiOutlineBars } from 'react-icons/ai'
import BarMenu from './components/BarMenu/BarMenu';

function App() {
  const [notes, setNotes] = useState([]);
  const [menu, setMenu] = useState('none');
  const [background, setBackground] = useState('red')

  const ToggleMenu = () => {
    setMenu(menu === 'none' ? 'block' : 'none')
  }

  const addNote = (note) => {
    setNotes((prev) => [...prev, { 'subj': note.subj, 'note': note.note }]);
  }
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((item, index) => {
      return item ? id !== index : "";
    })
    setNotes(updatedNotes)
  }
  const resetNotes = () => {
    setNotes([]);
  }
  const getBackground = (color) => {
    setBackground(color);
  }

  return (
    <div className="App" >
      <AiOutlineBars className='bar-menu' onClick={() => ToggleMenu()} />
      <BarMenu menu={menu} notes={notes} resetNotes={resetNotes} getBackground={getBackground} />
      <Form addNote={addNote} />
      <Notes notes={notes} deleteNote={deleteNote} background={background} />

    </div>
  );
}

export default App;
