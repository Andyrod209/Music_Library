import { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import SearchBar from "./Components/SearchBar/SearchBar";
import AddNewSong from './Components/AddNewSong/AddNewSong';
import './App.css'


function App() {
  const [ musicLibrary, setMusicLibrary] = useState([]);

  const [holdFilterMusic, setHoldFilterMusic] = useState([]);

  // filters through and displays what the user typed
  function filterMusic(searchBy){
    let filtered = musicLibrary.filter(song => {
      if (song.title.includes(searchBy) || song.artist.includes(searchBy) || song.album.includes(searchBy) || song.genre.includes(searchBy) 
      || song.releaseDate.includes(searchBy)) {
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
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    setMusicLibrary(response.data);
    setHoldFilterMusic(response.data)
  }
  console.log(holdFilterMusic)
  return (
    <div className="App">
      <header className="App-header">
      
        <AddNewSong />
        
        <SearchBar musicLibrary = {musicLibrary} filterMusic = {filterMusic}/>
        <Button variant="info" onClick={getAllMusic}>List All</Button>
      
        <DisplayMusic musicLibrary = {holdFilterMusic} />
      </header>
    </div>
  );
}

export default App;
