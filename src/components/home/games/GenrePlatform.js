import React from "react";
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge'


function GenrePlatform({platforms, genres} ) {
    console.log(platforms);
    console.log(genres);
          const genreList = genres.map((genre, index) => {
            return <Badge pill variant="success" key={index} >{genre.name}</Badge>

            })
            const platformList = platforms.map((type, i) => {
            return <Badge pill variant="dark" key={i} >{type.platform.name}</Badge>

            })

    return (
     <>

        <div>
            <h2>Genres</h2>
            <>{genreList} </>
        </div>
         <div>
            <h2>Platforms</h2>
            <>{platformList} </>
        </div>
    </>
)

 }


GenrePlatform.propTypes = {
    genres: PropTypes.string.isRequired,
     platforms: PropTypes.string.isRequired

};

export default GenrePlatform;