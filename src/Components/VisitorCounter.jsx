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
          setVisitorCount(data.visitorCount);
        })
        .catch((error) => {
          setError(error.message);
        });
    }, []);

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className="text-center">
        <p>Visitor Count: {visitorCount}</p>
      </div>
    );
}
