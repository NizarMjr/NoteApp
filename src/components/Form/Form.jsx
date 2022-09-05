import React, { useState } from "react";
import form from './form.css'
const Form = (props) => {

    const { addNote } = props;
    const [add, setAdd] = useState('none');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const note = {
        'subj': '',
        'note': '',
    }

    const addnewNote = () => {
        setAdd('none');
        note.subj = subject;
        note.note = message;
        addNote(note);
        setSubject('');
        setMessage('');
    }

    return (
        <div className="input-Part">
            <div className="title">Note App</div>
            <button className="addNote" onClick={() => setAdd('block')}>+</button>
            <div className="add" style={{ display: add }}>
                <input type="subject" placeholder="Subject" value={subject} onChange={(e) => { setSubject(e.target.value) }} />
                <textarea placeholder="Write Your Note Here" value={message} onChange={(e) => { setMessage(e.target.value) }} />
                <button onClick={() => addnewNote()} className="btn save">Save</button>
            </div>
        </div>
    )
}

export default Form;