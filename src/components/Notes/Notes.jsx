import React, { useState } from "react";
import notes from './notes.css'

const Note = (props) => {
    const { notes, deleteNote, background } = props;
    const [displayNote, setDisplayNote] = useState("none");
    const [edit, setEdit] = useState('none');

    const showNote = () => {
        setDisplayNote("block");
    }

    const closeNote = () => {
        setDisplayNote('none');
    }

    const deleteAndUpdate = (index) => {
        deleteNote(index);
        setDisplayNote('none')
    }
    const editNote = () => {
        setEdit('block')
    }
    const updateEdit = () => {
        setEdit('none');
        setDisplayNote('none');
    }
    const allNotes = notes.map((item, index) => {
        return (
            <React.Fragment key={index}>
                <div className="note" onClick={() => showNote()} style={{ backgroundColor: background }}>
                    <div className="subject">
                        {item.subj}
                    </div>
                    <div className="note-content">
                        {item.note}
                    </div>
                </div>
                <div className="display-note" style={{ display: displayNote }}>
                    <h2>Subject: {item.subj}</h2>
                    <p>{item.note}</p>
                    <div className="add" style={{ display: edit, background: "white" }} >
                        <input type="text" defaultValue={item.subj} placeholder="Subject" onChange={(e) => { item.subj = e.target.value }} />
                        <textarea placeholder="Write Your Note Here" defaultValue={item.note} onChange={(e) => { item.note = e.target.value }} />
                        <button className="btn save" onClick={() => updateEdit()}>Save</button>
                    </div>
                    <div className="btn-note">
                        <button className="edit-note btn" style={{ background: "green" }} onClick={() => editNote()} >Edit</button>
                        <button className="delete-note btn" style={{ background: "red" }} onClick={() => deleteAndUpdate(index)} >Delete</button>
                        <button className="close-note btn" onClick={() => closeNote()} style={{ background: "blue" }} >Close</button>
                    </div>
                </div>
            </React.Fragment>
        )
    })
    return (
        <>{notes.length !== 0 ? <div className="notes">{allNotes}</div> : <p className="empty">List Empty</p>}</>
    )
}
export default Note;