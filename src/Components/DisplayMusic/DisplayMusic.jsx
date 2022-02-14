

const DisplayMusic = (props) => {

    console.log(props);

    let mappedMusicId = props.musicLibrary.map(id => {
        return <li>{id.id + 1}</li>
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
        <div className="container">
            <h3> Music Details</h3>
            <table >
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
            </table>
        </div>
    );

}

export default DisplayMusic;