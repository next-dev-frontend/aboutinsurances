import React, { useEffect, useState } from 'react';

const LastTenDays = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const [randomDay, setRandomDay] = useState(null);

  useEffect(() => {
    const lastTenDays = [];
    for (let i = 9; i >= 0; i--) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() - i);
      lastTenDays.push(date);
    }
    const randomIndex = Math.floor(Math.random() * 10);
    const randomDay = lastTenDays[randomIndex];
    setRandomDay(randomDay);
  }, []);

  if (!randomDay) {
    return null; // Renderiza um componente vazio até que o dia aleatório seja gerado
  }

  const formattedDate = randomDay.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="select-none container mx-auto pb-4 px-8 w-full max-w-5xl">
      <div className="flex flex-nowrap items-center justify-end">
        <p className="text-sm md:text-md lg:text-lg underline">Publication Date: {formattedDate}</p>
      </div>
    </div>
  );
};

export default LastTenDays;