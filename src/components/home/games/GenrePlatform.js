import React from "react";

function GenrePlatform({platforms, genres} ) {
    console.log(platforms);
    console.log(genres);
          const genreList = genres.map((genre, index) => {
            return <li key={index} >{genre.name}</li>

            })
            const platformList = platforms.map((type, i) => {
            return <li key={i} >{type.platform.name}</li>

            })

    return (
        <>
        <h3>Genres</h3>
<ul>{genreList} </ul>
<h3>Platforms</h3>
<ul>{platformList} </ul>
</>
)

 }


/*GenrePlatform.propTypes = {
    GenrePlatform: propTypes.string.isRequired
};*/

export default GenrePlatform;