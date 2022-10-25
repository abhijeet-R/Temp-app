import React, { useEffect, useState } from 'react'
import "./style.css";

export const Tempapp = () => {

    const [city,setCity]=useState("mumbai");
    const [search,setSearch]=useState("mumbai");

    useEffect(()=>{
      const fetchApi = async()=>{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5bbd15951ef1d6eed40695603d553e47`
        const response =await fetch(url);  
        const resJson = await response.json();
        setCity(resJson.main)
    };
    fetchApi();
    },[search])
  return (
    <div className="box">
        <div className="inputData">
            <input 
            type="search" 
            value={search}
            className='inputfeild' 
            onChange={(event)=>{setSearch(event.target.value)}}
           />
        </div>
        {
            !city?(
<p>No Data Found</p>
            ):(
        <div>
        <div className="info">
            <h2 className="location">
            <i class="fa fa-street-view" ></i>{search} 
            </h2>
            <h1 className="temp">
             {city.temp}
            </h1>
            <h3 className="tempin_max"> {city.temp_min}Cel |  {city.temp_max}Cel</h3>
        </div>
        <div className="wave1"></div>
        <div className="wave2"></div>
        <div className="wave3"></div>
    </div>
           ) }
           </div>
  )
}
