import React from "react";

function GenrePlatform({name, platform} ) {
    console.log(name);
    return (
        <>
<p>{name} </p>
<p>{platform} </p>

</>
)

 }


/*GenrePlatform.propTypes = {
    GenrePlatform: propTypes.string.isRequired
};*/

export default GenrePlatform;