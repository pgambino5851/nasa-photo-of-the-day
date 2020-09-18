import React,  {useEffect, useState} from "react";
import "../App.css";
import axios from 'axios';

export default function PhotoOfTheDay() {

    const [nasaData, setNasaData] = useState([])

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=fA1raihbZ0GQp2pnKObcv3UyDFUPIbyOykaNybkJ")
            .then(res => {
                console.log(res.data)
                setNasaData(res.data)
                
                })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="apod">
            <img alt="Photo of the Day" src={nasaData.hdurl}></img>
        </div>
    )
}