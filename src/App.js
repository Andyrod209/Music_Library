import { useState, useEffect } from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./Components/SearchBar/SearchBar";


function App() {
  const [ musicLibrary, setMusicLibrary] = useState([]);

  const [holdFilterMusic, setHoldFilterMusic] = useState([]);

  // filters through and displays what the user typed
  function filterMusic(searchBy){
    let filtered = musicLibrary.filter(song => {
      if (song.title.includes(searchBy) || song.artist.includes(searchBy) || song.album.includes(searchBy) || song.genre.includes(searchBy)) {
      return true
      }
      else{
        return false
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
        <p>Hello world</p>
        <button onClick={getAllMusic}>List All</button>
        <SearchBar musicLibrary = {musicLibrary} filterMusic = {filterMusic}/>
        <DisplayMusic musicLibrary = {holdFilterMusic} />
      </header>
    </div>
  );
}

export default App;
