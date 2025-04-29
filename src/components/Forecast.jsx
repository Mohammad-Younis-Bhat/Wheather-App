import  { useEffect, useState } from 'react';
const Forecast =  (props)=> {
    const [forcasteData, setForCasteData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=882bb6238c83430cb1585843252804&q=${props.City}&days=10&aqi=yes&alerts=no`);
            const Response = await result.json();
            console.log(Response);
            setForCasteData(Response);
          } catch (error) {
            console.error("Failed to fetch data:", error);
          }
        };
      
        fetchData();
      }, [props.City]);

   return(
    <div className="w-full lg:w-3/5 ml-4 mr-9 my-2 p-4 bg-orange-500 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">10 Days Forecast</h2>
        {forcasteData && forcasteData.forecast ? (
            
            forcasteData.forecast.forecastday.map((day, index) => (
                <div className="grid grid-cols-1 gap-4 my-2" key={index}>
                    <div  className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                        <div className="flex items-center space-x-2">
                        <img src="https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_1280.png" className="w-8 h-8" />
                        <span className="font-medium">{day.date}</span>
                        </div>
                        <div className="text-right">
                        <p className="text-sm">{day.day.condition.text}</p>
                        <p className="text-lg font-semibold">{day.day.maxtemp_c} °C</p>
                        </div>
                    </div>
                </div>
            ))

        ):(
            <div className="grid grid-cols-1 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse flex items-center justify-between bg-gray-200 p-3 rounded-md">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="w-24 h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <div className="w-16 h-4 bg-gray-300 rounded"></div>
                  <div className="w-10 h-6 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        
    </div>
   );
}

export default Forecast;