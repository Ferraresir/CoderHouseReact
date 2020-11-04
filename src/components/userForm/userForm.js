import React, { useState, useRef, useEffect } from 'react'


const UseForm = () => {
    
    const inputFocus = useRef();

    useEffect(() => {
        inputFocus.current.focus();
    }, []);

    const [data, setData] = useState({ firstName: 'Ramiro', lastName: 'Ferraresi' })

    const handleName = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }

    return (
        <div>
            <h2>UseForm</h2>
            <h2>{data.firstName}</h2>
            <h2>{data.lastName}</h2>
            <input ref={inputFocus} onInput={handleName} type="text" name="firstName" id="firstName" />
            <input onInput={handleName} type="text" name="lastName" id="lastName" />

        </div>
    )
}

export default UseForm
