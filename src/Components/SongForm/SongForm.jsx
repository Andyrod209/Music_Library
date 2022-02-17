const NarBarButtons = (props) => {
    return ( 
        <form>
            <input className="newSong" type='text' placeholder="Songname"/>
            <input className="newSong" type='text' placeholder="Album"/>
            <input className="newSong" type='text' placeholder="Artist"/>
            <input className="newSong" type='text' placeholder="Genre"/>
            <input className="newSong" type='text' placeholder="Release Date"/>
        </form>
     );
}
 
export default NarBarButtons;