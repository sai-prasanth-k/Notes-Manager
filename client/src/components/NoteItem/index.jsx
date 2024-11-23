import React, {useState} from 'react'
import { NoteButton, NoteButtonContainer, EditInput, EditButtonContainer, EditText, EditSelect,  NoteItemEdit, NoteDescription, NoteHeading, NoteItemDisplay, EditButton } from './styledComponent';

const NoteItem = ({note, onDelete, onUpdate}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(note.title);
    const [description, setDescription] = useState(note.description);
    const [category, setCategory] = useState(note.category);

    const handleUpdate = async () => {
        const updatedNote = {title, description, category};
        try {
            const response = await fetch(`http://localhost:5000/api/notes/${note._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedNote)
            });
            const data = await response.json();
            onUpdate(data);
            setIsEditing(false);
            } catch (error) {
                console.error("Error updating note: ", error);
            }
        }
    

    return (
        <div>
            {
                isEditing ? (
                    <NoteItemEdit> 
                        <EditInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <EditText value={description} onChange={(e) => setDescription(e.target.value)} ></EditText> 
                        <EditSelect value={category} onChange={(e) => setCategory(e.target.value)} > 
                            <option value="Work">Work</option> 
                            <option value="Personal">Personal</option> 
                            <option value="Others">Others</option> 
                        </EditSelect> 
                        <EditButtonContainer>
                            <EditButton onClick={handleUpdate}>Update</EditButton> 
                            <EditButton onClick={() => setIsEditing(false)}>Cancel</EditButton>
                        </EditButtonContainer>
                    </NoteItemEdit>
                ) : (
                    <NoteItemDisplay> 
                        <NoteHeading>{note.title}</NoteHeading> 
                        <NoteDescription>{note.description}</NoteDescription> 
                        <NoteDescription><strong>Category:</strong> {note.category}</NoteDescription> 
                        <NoteButtonContainer>
                            <NoteButton onClick={() => setIsEditing(true)}>Edit</NoteButton> 
                            <NoteButton onClick={() => onDelete(note._id)}>Delete</NoteButton>
                        </NoteButtonContainer>
                    </NoteItemDisplay>
                )
            }
        </div>
    )
}

export default NoteItem