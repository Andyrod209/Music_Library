import { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic.jsx";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";
import SongForm from './Components/SongForm/SongForm.jsx';
import './App.css'



function App() {
  const [ musicLibrary, setMusicLibrary] = useState([]);

  const [holdFilterMusic, setHoldFilterMusic] = useState([]);
  console.log(holdFilterMusic)
  // filters through and displays what the user typed
  function filterMusic(searchBy){
    let filtered = musicLibrary.filter(song => {
      if (song.title.includes(searchBy) || song.artist.includes(searchBy) || song.album.includes(searchBy) || song.genre.includes(searchBy) 
      || song.release_date.includes(searchBy)) {
      return true;
      }
      else{
        return false;
      }
    })
    setHoldFilterMusic(filtered)
  }
  
    useEffect(() => {
      getAllMusic();
    }, [])

  async function getAllMusic(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setMusicLibrary(response.data);
    setHoldFilterMusic(response.data)
  }
  

  return (
    <div className="App">
        <SongForm getAllMusic = {getAllMusic}/>
        <SearchBar musicLibrary = {musicLibrary} filterMusic = {filterMusic}/>
        <Button variant="info" onClick={getAllMusic}>List All</Button>
        <DisplayMusic musicLibrary = {holdFilterMusic} getAllMusic = {getAllMusic}/>
    </div>
  );
}

export default App;
