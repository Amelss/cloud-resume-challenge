import { useState, useEffect } from "react";

export default function VisitCounter() {
   const [visitorCount, setVisitorCount] = useState(null);
   const [error, setError] = useState(null);

   useEffect(() => {
     const api_url = `https://051fdnlge6.execute-api.eu-west-2.amazonaws.com/dev/`;
     fetch(api_url)
       .then((response) => {
         if (!response.ok) {
           throw new Error("Network did not respond");
         }
         return response.json();
       })
       .then((data) => {
         const visitCount = JSON.parse(data.body);
         setVisitorCount(visitCount);
       })
       .catch((error) => {
         setError(error.message);
       });
   }, []);

   if (error) {
     return <div>Error: {error}</div>;
   }

   return (
       <div className="bg-white w-56 mx-auto rounded-lg pb-2 shadow-md">
           <p className="text-center bg-blue-200 text-white rounded-t-lg font-bold">Visitor Counter</p>
       {visitorCount !== null && (
         <p className="text-center text-2xl font-bold pt-3 pb-2 text-blue-300"> {visitorCount}</p>
       )}
     </div>
   );
}
