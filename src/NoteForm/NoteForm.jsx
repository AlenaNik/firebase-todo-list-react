import React, { Component } from 'react';
import './NoteForm.css';

export default class NoteForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            newNoteContent: '', 
        };
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    //The value of an input box gonna change cause of this
    handleUserInput(e){
        this.setState({
            newNoteContent: e.target.value, //the value of the text input
        })
    }
    render() {
        return (
            <div> 
                <input placeholder="write a new note..."
                value={this.state.newNoteContent}
                onChange={this.handleUserInput}/>
                <button>Add Note</button>
            </div>
        )
    }
};
