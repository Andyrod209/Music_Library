import axios from "axios"
import { useState } from "react"
import "./EditSong.css"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const EditSong = (props) => {
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
    async function editSong(){
        let song = {
            "title": title,
            "artist": artist,
            "album": album,
            "genre": genre,
            "release_date": releaseDate
        };
        console.log(song);
        let response = await axios.put(`http://127.0.0.1:8000/music/${props.id}/`, song);
            await props.getAllMusic();
            console.log(response);  
            console.log(response.data);
    }

    function handleSubmit(formEvent){
        formEvent.preventDefault();
        editSong();
        }
    console.log(props.id)
    return ( 
        <>
        <Button variant="primary" onClick={handleShow}>Edit</Button>
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="editsong" onSubmit={handleSubmit}>
                    <label>Title: </label>
                    <input type='text' placeholder={title}
                        onChange={(event) => setTitle(event.target.value)} />
                    <label>Album: </label>
                    <input type='text' placeholder={album}
                        onChange={(event) => setAlbum(event.target.value)} />
                    <label>Artist: </label>
                    <input type='text' placeholder={artist}
                        onChange={(event) => setArtist(event.target.value)} />
                    <label>Genre: </label>
                    <input type='text' placeholder={genre}
                        onChange={(event) => setGenre(event.target.value)} />
                    <label>Release Date: </label>
                    <input type='date' placeholder={releaseDate}
                        onChange={(event) => setRelease_Date(event.target.value)} />
                    <button type="submit">Edit</button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleClose}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
        </>
        
     );
}
 
export default EditSong;
            