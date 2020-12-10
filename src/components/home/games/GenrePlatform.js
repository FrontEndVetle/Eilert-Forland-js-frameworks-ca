import React from "react";
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge'
import Col from "react-bootstrap/esm/Col";


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
            <h3>Genres</h3>
            <>{genreList} </>
        </div>
         <div>
            <h3>Platforms</h3>
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