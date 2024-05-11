import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'


function ShowQuote() {
    let [quote, setQuote] = useState({ author: "", text: "" });
    let params = useParams()

    useEffect(() => {
        async function fetchQuote() {
            let res = await axios.get(`http://localhost:8080/quotes/${params.id}`)
            let { author, text } = res.data;
            setQuote({ author, text });
        }
        fetchQuote();
    }, [])

    return (
        <div>
            <h2>{quote.author}</h2>
            <h3>{quote.text}</h3>
        </div>
    )
}

export default ShowQuote
