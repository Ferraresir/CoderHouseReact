import React from 'react';
import ItemCount from '../itemCount/itemCount';
import './home.scss';

const onAdd = (counter) => {
    console.log(counter);
    alert('Esta queriendo comprar '+counter +' items');
}

const Home = ({ titulo, gretting }) => {

    return (
        <>
            <div id="gretting">
                <h1>{titulo}</h1>
                <p>{gretting}</p>
                <br />
                <br />
                <ItemCount initialValue={1} max={10} min={1} onAdd={onAdd} />
            </div>
        </>
    )
}

export default Home
