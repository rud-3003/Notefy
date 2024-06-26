import React, { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext';
import defaultimg from './iphone_notes.png';

export default function NoteItem(props) {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className='col-md-3'>
            <div className="card text-center my-1" >
                <img src={note.myFile===""?defaultimg:note.myFile} className="card-img-top" alt="..." height={200} width={300} />
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <i className="fa-solid fa-trash mx-1" style={{color: "#5c5d60"}} onClick={()=>{deleteNote(note._id);props.showAlert("Deleted Successfully", "success");}}></i>
                        <i className="fa-solid fa-pen-to-square mx-1" style={{color: "#5c5d60"}} onClick={()=>{updateNote(note)}}></i>
                    </div>
            </div>
        </div>
    )
}
