import Table from 'react-bootstrap/Table'

const DisplayMusic = (props) => {

    console.log(props);

    let mappedMusicId = props.musicLibrary.map(id => {
        return <li>{id.id}</li>
    });
    
    let mappedMusicTitles = props.musicLibrary.map(titles => {
        return <li>{titles.title}</li>
    });
    
    let mappedMusicAlbums = props.musicLibrary.map(albums => {
        return <li>{albums.album}</li>
    })
    
    let mappedMusicArtists = props.musicLibrary.map(Artists => {
        return <li>{Artists.artist}</li>
    });
    
    let mappedMusicGenres = props.musicLibrary.map(genres => {
        return <li>{genres.genre}</li>
    });
    return (
        <div>
            
            <h1>Music Library</h1>
           <Table striped bordered hover variant="dark">
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
             
            