import React from 'react';
import './home.scss';



const Home = ({titulo,gretting}) =>{
    return(
    <div id="gretting">
        <h1>{titulo}</h1>
    <   p>{gretting}</p>
    </div>
    )
}


export default Home
