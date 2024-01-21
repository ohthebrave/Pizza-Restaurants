
import React, { useState, useEffect } from "react";

export default function Restaurant() {
  const [restaurant, setRestaurant] = useState([]);

  const url = "http://127.0.0.1:8000/restaurants";

  const fetchRestaurant = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setRestaurant(data);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  console.log(restaurant);

  return (
    <div>
        {restaurant?.map(rest => (
            <ul key={rest.id}>
            <li><a  href="http://">{rest.name}</a></li>
            </ul>
        ))}
    </div>
  );
}
