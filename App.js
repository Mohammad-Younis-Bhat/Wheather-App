import React, { useEffect, useState } from 'react';
import Layout from './src/components/Layout/Layout';
import Forecast from './src/components/Forecast';
import Astronomy from './src/components/Astronomy';

const App = () => {
  const AQI = {
    1: "Good",
    2: "Moderate",
    3: "Unhealthy for Sensitive Groups",
    4: "Unhealthy",
    5: "Very Unhealthy",
    6: "Hazardous"
  };
  const [location, setLocation] = useState('srinagar');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;

          try {
            // Get City Name
            const cityResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
            const cityData = await cityResponse.json();
            const cityName = cityData.address.city || cityData.address.town || cityData.address.village || 'Unknown City';
            setLocation(cityName);
            //console.log(cityName);
            // Get Weather Data
            const weatherResponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=882bb6238c83430cb1585843252804&q=${cityName}&aqi=yes`);
            const weatherData = await weatherResponse.json();
            console.log('Weather:', weatherData);
            setWeather(weatherData);
            console.log(weather);
          } catch (err) {
            console.error(err);
            setError('Failed to fetch weather');
          }
        },
        (err) => {
          console.error(err);
          setError('Failed to get location');
        }
      );
    } else {
      setError('Geolocation not supported');
    }
  }, []);



  return (
    <Layout>
      <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-[#ff6900b0] bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-semibold font-poppins tracking-tight text-white sm:text-4xl sm:leading-none">
                Follow deoncardoza <br className="hidden md:block" />
                for more <span className="text-green-400">awesome content</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis aut quis ullam odio enim? Itaque minus nihil commodi quia eaque mollitia amet expedita in tenetur.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-green-400 hover:text-green-500"
              >
                Learn more
                <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                </svg>
              </a>
            </div>
            <div className="w-full max-w-xl xl:px-14 xl:w-5/12 ">
              <div className="bg-orange-500 rounded shadow-2xl p-7 sm:p-10 rounded-lg">

              <div className="max-w-xs mx-auto p-4 border rounded-lg shadow-md bg-orange-500 flex flex-col items-center space-y-4">

                    {/* Location and Current Weather */}
                    <div className="text-center">
                      <h2 className="text-2xl font-bold">{weather ? weather.location.name +' | '+ weather.location.region: 'Loading...'}</h2>
                      <p className="text-gray-600 mt-1 flex items-center justify-center gap-2 text-sm">
                        {weather ? weather.current.condition.text:'Loading...'} | Current : {weather ? weather.current.temp_c:'Loading...'}&#176;C
                      </p>
                    </div>

                    <hr className="w-full border-t" />

                    {/* Weather Details */}
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="p-2 border rounded-md text-center">
                        <p className="text-sm font-medium">UV: {weather ? weather.current.uv:'Loading...'}</p>
                      </div>
                      <div className="p-2 border rounded-md text-center">
                        <p className="text-sm font-medium">AQI: {weather ? AQI[weather.current.air_quality['us-epa-index']]:'Loading'}</p>
                      </div>
                      <div className="p-2 border rounded-md text-center">
                        <p className="text-sm font-medium">Wind: {weather ? weather.current.wind_kph:'Loading'} Km/H | {weather ? weather.current.wind_dir:'Loading'}</p>
                      </div>
                      <div className="p-2 border rounded-md text-center">
                        <p className="text-sm font-medium">Precipitation</p>
                        <p className="text-sm font-medium">{weather ? weather.current.precip_mm:'Loading'} MM</p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="w-full text-center text-xs text-gray-500 mt-4">
                      Source: AccuWeather
                    </div>
                    
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="w-full flex">
          <Forecast City={location}/>
          <Astronomy City={location}/>
      </div>
    
    </Layout>
  );
};

export default App;
