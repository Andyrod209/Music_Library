import { useState, useEffect } from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic/DisplayMusic";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./Components/SearchBar/SearchBar";


function App() {
  const [ musicLibrary, setMusicLibrary] = useState([]);

    useEffect(() => {
      getAllMusic();
    }, [])
  async function getAllMusic(){
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    setMusicLibrary(response.data);
    
  }
  console.log(musicLibrary)
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world</p>
        <SearchBar/>
        <DisplayMusic musicLibrary = {musicLibrary}/>
      </header>
    </div>
  );
}

export default App;
