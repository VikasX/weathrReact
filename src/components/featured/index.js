import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';
import SearchBar from "../../containers/search_bar";
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';



const Featured = () => {
    return (
        <div style={{position:'relative'}}>

            <Carrousel/>
<Zoom  delay={100}>

            <div className="artist_name">
                <div className="wrapper">
            <SearchBar />
                </div>
            </div>
</Zoom>
            <TimeUntil/>

        </div>
    );
};

export default Featured;