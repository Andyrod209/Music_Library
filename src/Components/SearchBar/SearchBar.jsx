import { useState } from "react";
import Button from 'react-bootstrap/Button';
import './SearchBar.css';
const SearchBar = (props) => {
    // catch user input
    const [searched, setSearched] = useState('');
    
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
        <div className="container">
            
                <label className="searchBar">Search Bar</label>
                <input className="search" type='text' placeholder="Search" onChange={handleUserInput}/>
                <Button variant="primary" onClick={handleSearch}>Submit</Button>          
            
        </div>
     );
}
 
export default SearchBar;