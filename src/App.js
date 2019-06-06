import React, { Component } from 'react';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import './App.css';


class App extends Component {

    constructor(props) {
      super(props);
      this.addNote = this.addNote.bind(this);
//Set up state to setup React state of my component
      this.state = {
        notes: [
          { id:1, noteContent: "Note 1 is here"},
          { id:2, noteContent: "Note 1 is here"},
        ],
      }
    }

    addNote(note){
      this.state.notes.push(note);
    }

      render() {
      return (
        <div>    
            <h1>React & Firebase List</h1>
              {
                this.state.notes.map((note) => {
                      return (
                      <Note noteContent={note.noteContent} noteId={note.id} key={note.id}/>
                      )
                })
              }
            <NoteForm addNote={this.addNote}/>
        </div>    
      );
    }
  }
export default App;
