

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
    // let mappedMusicTitles = props.musicLibrary.map(titles => {
    //     return <li>{titles.title}</li>
    // });
    // let mappedMusicTitles = props.musicLibrary.map(titles => {
    //     return <li>{titles.title}</li>
    // });
    return (
        <div>
            <ul>
                {mappedMusicId}
                {mappedMusicTitles}
                {mappedMusicAlbums}
            </ul>
        </div>
    );

}

export default DisplayMusic;