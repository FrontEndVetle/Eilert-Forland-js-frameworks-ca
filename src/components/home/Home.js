import React from 'react';
import Heading from './../layout/Heading'
import GameList from './games/GamesList'

function Home() {
    return (
        <>
            <Heading title="Games"></Heading>
            <GameList/>
        </>
    );
}

export default Home;