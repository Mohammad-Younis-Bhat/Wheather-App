import  { useEffect, useState } from 'react';
const Astronomy = (props)=> {

const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await fetch(`http://api.weatherapi.com/v1/astronomy.json?key=882bb6238c83430cb1585843252804&q=${props.City}&dt=${new Date().toISOString().split('T')[0]}`);
            const Response = await result.json();
            console.log(Response);
            setWeatherData(Response);
          } catch (error) {
            console.error("Failed to fetch data:", error);
          }
        };
      
        fetchData();
      }, [props.City]);

    return(
     <div className="w-full lg:w-1/3 my-2 p-4 bg-orange-500 rounded-lg shadow-md h-2/4">
         <h2 className="text-2xl font-bold text-white mb-4 text-center">Weather For The Day</h2>  
        <hr/>
        <br/>
      {/* Astronomy Details */}
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-sm text-white">🌅 Sunrise</p>
          <p className="text-lg font-semibold text-blue-500">{weatherData?weatherData.astronomy.astro.sunrise:"Loading..."}</p>
        </div>
        <div>
          <p className="text-sm text-white">🌇 Sunset</p>
          <p className="text-lg font-semibold text-blue-500">{weatherData?weatherData.astronomy.astro.sunset:"Loading..."}</p>
        </div>
        <div>
          <p className="text-sm text-white">🌙 Moonrise</p>
          <p className="text-lg font-semibold text-blue-500">{weatherData?weatherData.astronomy.astro.moonrise:"Loading..."}</p>
        </div>
        <div>
          <p className="text-sm text-white">🌘 Moonset</p>
          <p className="text-lg font-semibold text-blue-500">{weatherData?weatherData.astronomy.astro.moonset:"Loading..."}</p>
        </div>
        <div>
          <p className="text-sm text-white">Moon Phase</p>
          <p className="text-md text-blue-500">{weatherData?weatherData.astronomy.astro.moon_phase:"Loading..."}</p>
        </div>
        <div>
          <p className="text-sm text-white">Illumination</p>
          <p className="text-sm font-semibold text-blue-500">{weatherData?weatherData.astronomy.astro.moon_illumination:"Loading..."}%</p>
        </div>
      </div>



     </div>
    );
 }
 
 export default Astronomy;