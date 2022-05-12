import axios from "axios";
import { useState } from "react";

const SongForm = (props) => {

    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [genre, setGenre] = useState('')
    const [releaseDate, setRelease_Date] = useState('')
    
  

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
        }
        
   
    
    return ( 
        <form onSubmit={handleSubmit}>
            <h3>Add New Song</h3>
            <input className="newSong" type='text' placeholder="Songname" onChange={(event) => setTitle(event.target.value)}/>
            <input className="newSong" type='text' placeholder="Album" onChange={(event) => setArtist(event.target.value)}/>
            <input className="newSong" type='text' placeholder="Artist" onChange={(event) => setAlbum(event.target.value)}/>
            <input className="newSong" type='text' placeholder="Genre" onChange={(event) => setGenre(event.target.value)}/>
            <input className="newSong" type='date' placeholder="Date" onChange={(event) => setRelease_Date(event.target.value)}/>
            <button type ="submit">Add</button>
        </form>
     );
}
 
export default SongForm;