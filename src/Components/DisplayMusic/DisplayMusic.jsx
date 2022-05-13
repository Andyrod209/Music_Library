import axios from 'axios';
import Table from 'react-bootstrap/Table';
import './DisplayMusic.css';
import EditSong from '../EditSong/EditSong.jsx';


const DisplayMusic = (props) => {

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

                                <td><EditSong id={entry.id} getAllMusic={props.getAllMusic} title={entry.title}/></td>
                                <td><button onClick={() => deleteSong(entry.id)}>DELETE</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            </div>
            
        </div>  
    );
}

export default DisplayMusic;
             
            