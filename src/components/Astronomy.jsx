const Astronomy = ()=> {
    return(
     <div className="w-full lg:w-1/3 my-2 p-4 bg-orange-500 rounded-lg shadow-md">
         <h2 className="text-2xl font-bold text-white mb-4 text-center">10 Days Forecast</h2>
         
         <div className="grid grid-cols-1 gap-4">
             <div  className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                 <div className="flex items-center space-x-2">
                 <img src="https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_1280.png" className="w-8 h-8" />
                 <span className="font-medium">25-04-2025</span>
                 </div>
                 <div className="text-right">
                 <p className="text-sm">sunny</p>
                 <p className="text-lg font-semibold">10°C</p>
                 </div>
             </div>
         </div>
         </div>
    );
 }
 
 export default Astronomy;