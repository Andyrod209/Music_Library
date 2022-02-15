import { useState } from "react";
import Button from 'react-bootstrap/Button'
const SearchBar = (props) => {
    // catch user input
    const [searched, setSearched] = useState('');
    
    // let mappedMusicId = props.musicLibrary.map(id => {
    //     return <p>{id.id}</p>
    // });
    
    let mappedMusic = props.musicLibrary.map(Artists => {
        return <p>{Artists.artist}</p>
    });

    
    // filtering through to display what user searched for 
    function handleSearch(formEvent){
        formEvent.preventDefault();
        props.filterMusic(searched);
    }
    // takes user input and sends to searched
    const handleUserInput = input => {
        setSearched(input.target.value);
      }
  
    return ( 
        
        <form onSubmit={handleSearch}>
            <h4>Search Bar</h4>
            <input className="search" type='text' placeholder="Search" onChange={handleUserInput}/>
            <Button variant="primary" onClick={handleSearch}>Submit</Button>          
        </form>
        
     );
}
 
export default SearchBar;