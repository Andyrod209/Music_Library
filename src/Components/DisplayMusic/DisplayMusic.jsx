import Table from 'react-bootstrap/Table'
import './DisplayMusic.css'

const DisplayMusic = (props) => {

    let mappedMusicId = props.musicLibrary.map(id => {
        return <p>{id.id}</p>
    });
    
    let mappedMusicTitles = props.musicLibrary.map(titles => {
        return <p>{titles.title}</p>
    });
    
    let mappedMusicAlbums = props.musicLibrary.map(albums => {
        return <p>{albums.album}</p>
    })
    
    let mappedMusicArtists = props.musicLibrary.map(Artists => {
        return <p>{Artists.artist}</p>
    });
    
    let mappedMusicGenres = props.musicLibrary.map(genres => {
        return <p>{genres.genre}</p>
    });

    let mappedMusicDates = props.musicLibrary.map(dates =>{
        return <p>{dates.releaseDate}</p>
    })
    return (
        <div className='w-75 p-5'>
            
            <h1 className='h1Table'>Music Library</h1>
           <Table striped bordered hover variant="dark" responsive='sm'>
                <thead>
                    <tr>   
                        <th>Id</th>
                        <th>Titles</th> 
                        <th>Albums</th>
                        <th>Artists</th>
                        <th>Genres</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td>{mappedMusicId}</td>
                        <td>{mappedMusicTitles}</td>
                        <td>{mappedMusicAlbums}</td>
                        <td>{mappedMusicArtists}</td>
                        <td>{mappedMusicGenres}</td>
                        <td>{mappedMusicDates}</td>
                    </tr>    
                </tbody>
            </Table>
        </div>
    );
}

export default DisplayMusic;
             
            