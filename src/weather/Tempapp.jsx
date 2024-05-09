import { useEffect, useState } from 'react';
import './tempapp.css'
import SsidChartIcon from '@mui/icons-material/SsidChart';

const Tempapp = () => {

const[city, setCity] = useState(null);
const[search, setSearch] = useState("Mumbai")


useEffect ( () => {
    const fetchApi = async() =>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a9cda9cd6cc7b84a5ed0adb4dcb9f53c`;
        const response = await fetch(url);
        const resJson = await response.json();
        setCity(resJson.main);
    }

    fetchApi();
}, [search] ) 

  return (
    <div className='App'>
      <div className="box">
        <div className="inputData">
            <input type="search" value={search} className='inputField' onChange={ (event) => {
                setSearch(event.target.value)
            } } />
        </div>
{
    !city? (
        <p className='errormsg'>No Data Found</p>
    ) :( <div className="info">
    <h2 className="location">
    <SsidChartIcon /> {search}
    </h2>
    <h1 className="temp">
        {city.temp}°Cel
    </h1>
    <h3 className="tempmin_max">
        min : {city.temp_min}°Cel | max : {city.temp_max}°Cel
    </h3>
</div>
)}


      </div>
    </div>
  )
}

export default Tempapp
