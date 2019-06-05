import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';


class Note extends Component {

    constructor(props) {
        super(props)
    
        this.noteContent = props.noteContent;
        this.noteID = props.noteID;
    }     

    render() {
        return (
            <div>
            <p>{ this.noteContent }</p>              
            </div>
        )
    }
}

Note.propTypes = {
    noteContent: PropTypes.string
}

export default Note;