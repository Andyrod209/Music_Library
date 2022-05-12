import axios from "axios"
import { useState } from "react"

const EditSong = (props) => {

    const id = props.id
    console.log(id)
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [genre, setGenre] = useState('')
    const [releaseDate, setRelease_Date] = useState('')
    
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
        
            await props.getAllMusic();
            console.log(response);  
            console.log(response.data);
        
    }

    function handleSubmit(formEvent){
        formEvent.preventDefault();
        editSong();
        }
    return ( 
        <form onSubmit={handleSubmit}>
            <h3>Edit Song</h3>
            <label>Id </label>
            <input className="editsong" type='text' placeholder={title} onChange={(event) => setTitle(event.target.value)}/>
            <input className="editsong" type='text' placeholder={album} onChange={(event) => setAlbum(event.target.value)}/>
            <input className="editsong" type='text' placeholder={artist} onChange={(event) => setArtist(event.target.value)}/>
            <input className="editsong" type='text' placeholder={genre} onChange={(event) => setGenre(event.target.value)}/>
            <input className="editsong" type='date' placeholder={releaseDate} onChange={(event) => setRelease_Date(event.target.value)}/>
            <button type ="submit">Edit</button>
        </form>
     );
}
 
export default EditSong;
            