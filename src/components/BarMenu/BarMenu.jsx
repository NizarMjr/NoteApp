import React from "react";
import barMenu from './barMenu.css'

const BarMenu = (props) => {
    const { menu, notes, resetNotes, getBackground } = props
    const restart = () => {
        resetNotes();
    }
    return (
        <div className="menu-list" style={{ display: menu }}>
            <ul className="menu" >
                <li> Notes: {notes.length}</li>
                <li className="delete-all" onClick={() => restart()}>Reset Notes</li>
                <ul className="background">
                    <li className="red" onClick={() => getBackground('red')}></li>
                    <li className="blue" onClick={() => getBackground('blue')}></li>
                    <li className="green" onClick={() => getBackground('green')}></li>
                </ul>
            </ul>
        </div>
    )
}

export default BarMenu;