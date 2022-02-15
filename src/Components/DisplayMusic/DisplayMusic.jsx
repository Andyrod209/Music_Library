import Table from 'react-bootstrap/Table'

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
    return (
        <div>
            
            <h1>Music Library</h1>
           <Table striped bordered hover variant="dark" >
                <thead>
                    <tr>   
                        <th>Id</th>
                        <th>Titles</th> 
                        <th>Albums</th>
                        <th>Artists</th>
                        <th>Genres</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td>{mappedMusicId}</td>
                        <td>{mappedMusicTitles}</td>
                        <td>{mappedMusicAlbums}</td>
                        <td>{mappedMusicArtists}</td>
                        <td>{mappedMusicGenres}</td>
                    </tr>    
                </tbody>
            </Table>
        </div>
    );
}

export default DisplayMusic;
             
            