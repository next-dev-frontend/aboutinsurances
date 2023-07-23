import React, { useEffect, useState } from 'react';

const LastTenDays = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [lastBuildDate, setLastBuildDate] = useState(null);

  useEffect(() => {
    fetch('/api/getLastBuildDate') // Replace this with the endpoint to fetch the last build date from your backend or server
      .then(response => response.json())
      .then(data => {
        const lastBuildDate = new Date(data.lastBuildDate); // Assuming the API returns the last build date as a string in ISO format
        setLastBuildDate(lastBuildDate);
      })
      .catch(error => {
        console.error('Error fetching last build date:', error);
      });
  }, []);

  if (!lastBuildDate) {
    return null; // Render an empty component until the last build date is fetched
  }

  const formattedDate = lastBuildDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="select-none container mx-auto py-4 px-8 w-full max-w-5xl">
      <div className="flex flex-nowrap items-center justify-end">
        <p className="text-sm md:text-md underline">Last Update: {formattedDate}</p>
      </div>
    </div>
  );
};

export default LastTenDays;