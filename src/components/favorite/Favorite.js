import React from 'react'
import FavoriteList from './FavoriteList';
import Heading from './../layout/Heading'


function Favorite() {

        return (
            <div>
                <Heading title="My Favorite Games"></Heading>

                <FavoriteList />
            </div>
        )

}

export default Favorite