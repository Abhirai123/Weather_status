import React, { useEffect, useState } from 'react'

const Weather = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('New Delhi')
    
    const searchApi = async ()=>{
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c20cffd0003ff9d68c8acce015a65d76`
        const resp = await fetch(url);
        const result = await resp.json();
        setCity(result.main)
        console.log(result)
    }

    useEffect(()=>{       

        searchApi();
    },[search])
    return (
        <div className="weather_cards">
            <span></span>
            <h1>Weather Status</h1>
            <div className="weather_search">
                <input type="search" placeholder="Search city.." value={search} onChange={(e)=> {setSearch(e.target.value)}} />
            </div>

            {
                !city ? (
                    <p>City  not found</p>
                ): 
                <div className="weather_info">
                <h1>{search}</h1>
                <h3 className="temp">
                    {city.temp}<sup>o</sup>C
                </h3>
                <p>Min: {city.temp_min}<sup>o</sup>C | Max: {city.temp_max}<sup>o</sup>C</p>
            </div>
            }
           
        </div>
    )
}

export default Weather
