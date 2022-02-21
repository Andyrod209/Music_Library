import axios from "axios"
import { useState } from "react"

const EditSong = (props) => {
    
    const [id, setId] = useState(Number)
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [genre, setGenre] = useState('')
    const [releaseDate, setRelease_Date] = useState('')
    console.log(id)
    
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
        let response = await axios.put(`http://127.0.0.1:8000/music/${id}/`, song);
        if(response.status === 201){
            await props.getAllMusic
            console.log(response);  
            console.log(response.data);
        };
    }

    function handleSubmit(formEvent){
        formEvent.preventDefault();
        editSong();
        }
    return ( 
        <form onSubmit={handleSubmit}>
            <h3>Edit Song</h3>
            <input className="editsong" type='number' placeholder="Id" onChange={(event) => setId(event.target.value)}/>
            <input className="editsong" type='text' placeholder="Songname" onChange={(event) => setTitle(event.target.value)}/>
            <input className="editsong" type='text' placeholder="Album" onChange={(event) => setArtist(event.target.value)}/>
            <input className="editsong" type='text' placeholder="Artist" onChange={(event) => setAlbum(event.target.value)}/>
            <input className="editsong" type='text' placeholder="Genre" onChange={(event) => setGenre(event.target.value)}/>
            <input className="editsong" type='date' placeholder="Date" onChange={(event) => setRelease_Date(event.target.value)}/>
            <button type ="submit">Add</button>
        </form>
     );
}
 
export default EditSong;
            