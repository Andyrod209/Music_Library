import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import './DisplayMusic.css';
import EditSong from '../EditSong/EditSong.jsx';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const DisplayMusic = (props) => {
    //Step one: click edit button on table to save song's id to state
    const [id, setId] = useState(Number)
    // modal variables
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //Step two: Don't render edit form UNTIL edit button is clicked
    function songToEdit(givenId){
        setId(givenId);
        console.log(id);
        handleShow();
        
        return (
            <div>
                <EditSong id = {givenId}/>
            </div>
        )};
    

    async function deleteSong(id){  
        let response = await axios.delete(`http://127.0.0.1:8000/music/${id}/`)  
        await props.getAllMusic(); 
        console.log(response);  
        console.log(response.data);
        
    };    


    return (
        <div>
            <div className='w-75 p-5'>
            <h1 className='h1Table'>Music Library</h1>
            <Table striped bordered hover variant="dark" responsive='sm'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Titles</th>
                        <th>Albums</th>
                        <th>Artists</th>
                        <th>Genres</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.musicLibrary.map((entry, id) => {
                        return (
                            <tr key={id}>
                                <td>{entry.id}</td>

                                <td>{entry.title}</td>

                                <td>{entry.album}</td>

                                <td>{entry.artist}</td>

                                <td>{entry.genre}</td>

                                <td>{entry.release_date}</td>

                                <td><Button variant="primary" onClick={() => songToEdit(entry.id)}>Edit</Button></td>
                                <td><button onClick={() => deleteSong(entry.id)}>DELETE</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            </div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditSong />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>  
    );
}

export default DisplayMusic;
             
            