import axios from "axios";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './SongForm.css'

const SongForm = (props) => {

    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [genre, setGenre] = useState('')
    const [releaseDate, setRelease_Date] = useState('')

    // modal variables
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // add new song to list of songs
    async function createSong(){
        let song = {
            "title": title,
            "artist": artist,
            "album": album,
            "genre": genre,
            "release_date": releaseDate
        };
        console.log(song);
        let response = await axios.post('http://127.0.0.1:8000/music/', song);
            await props.getAllMusic();
            console.log(response);
            console.log(response.data);   
    }

    // prevents from refreshing page
    function handleSubmit(formEvent){
        formEvent.preventDefault();
        createSong();
        handleClose();
        }
        
    return ( 
        <>
        <Button variant="primary" onClick={handleShow}>Add New Song</Button>
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Song</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form className="song-form" onSubmit={handleSubmit}>
            <label>Title: </label>
                <input className="newSong" type='text' placeholder="Songname" onChange={(event) => setTitle(event.target.value)} />
            <label>Album: </label>
                <input className="newSong" type='text' placeholder="Album" onChange={(event) => setArtist(event.target.value)} />
            <label>Artist: </label>
                <input className="newSong" type='text' placeholder="Artist" onChange={(event) => setAlbum(event.target.value)} />
            <label>Genre: </label>    
                <input className="newSong" type='text' placeholder="Genre" onChange={(event) => setGenre(event.target.value)} />
            <label>Release Date: </label>
                <input className="newSong" type='date' placeholder="Date" onChange={(event) => setRelease_Date(event.target.value)} />
            </form>
        </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleSubmit} value="Submit" type="submit">Save Changes</Button>
            </Modal.Footer>
        </Modal>
        </>
     );
}
 
export default SongForm;