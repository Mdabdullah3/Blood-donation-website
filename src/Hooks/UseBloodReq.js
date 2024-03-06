import React, { useState, useEffect } from 'react';
const UseBloodReq = () => {
    const [bloodReq, setBloodReq] = useState([])
    useEffect(() => {
        fetch("https://blood.rebzigo.com/bloodReq")
            .then(res => res.json())
            .then(data => setBloodReq(data))
    }, [bloodReq])
    return [bloodReq]
};

export default UseBloodReq;