import React, {useState, useEffect} from 'react'
import SearchBar from '../SearchBar';
import Form from '../Form';
import NoteItem from '../NoteItem';
import { NotesViewContainer, NoteListContainer} from './styledComponent';

const NotesView = () => {
    const [notes, setNotes] = useState([]);
    const [query, setQuery] = useState({});

    useEffect( () => {
    const fetchNotes = async () => {
      try {
        const queryParams = new URLSearchParams(query).toString()
        console.log(`Query Params: ${queryParams}`)
        const response = await fetch(`http://localhost:5000/api/notes?${queryParams}`);
        if (!response.ok) {
          throw new Error("Failed to fetch notes");
        }
        const data = await response.json()
        setNotes(data)
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes()
  }, [query])

  const handleDelete = async (id) => {
    try {
        await fetch(`http://localhost:5000/api/notes/${id}`, {
            method: 'DELETE',
        });
        setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
    } catch (error) {
        console.error('Error deleting note: ', error);
    }
  }

  const handleAdd = (newNote) => {
    setNotes( prevNotes => [...prevNotes, newNote])
  }

  const handleUpdate = (updatedNote) => {
    setNotes(prevNotes => prevNotes.map(
        note => (
            note._id === updatedNote._id ? updatedNote : note
        )))
  }

  return (
    <NotesViewContainer>
        <SearchBar setQuery={setQuery} />
        <Form onAdd = {handleAdd} />
        <NoteListContainer>
            {
                notes.map(note => (
                    <NoteItem key= {note._id} note = {note} onDelete={handleDelete} onUpdate = {handleUpdate}/>
                ))
            }
        </NoteListContainer>
    </NotesViewContainer>
  )
}

export default NotesView